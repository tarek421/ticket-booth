import React, { useContext, useState } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })
    console.log(user.name)
    var provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleGoogle = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential)
            });
    }
    const handleChange = (event) => {
        let isFeildValid = true;
        if (event.target.name === 'email') {
            isFeildValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'name') {
            isFeildValid = (event.target.value)
        }
        if (event.target.name === 'password') {
            const passwordValidate = event.target.value.length >= 6;
            const passwordValidate2 = /\d{1}/.test(event.target.value);
            isFeildValid = (passwordValidate && passwordValidate2)
        }
        if (event.target.name === 'confirm_password') {
            const passwordValidate = event.target.value.length >= 6;
            const passwordValidate2 = /\d{1}/.test(event.target.value);
            isFeildValid = (passwordValidate && passwordValidate2)
        }
        if ("password" !== "confirm_password") {
          
            if ("password" != "confirm_password") {
              const isFeildValid = false;
              const errors = "Passwords don't match.";
              console.log(isFeildValid, errors)
            }
          }
        if (isFeildValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    // Signed in 
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(userCredential.user);
                    history.replace(from);
                    console.log(userCredential.user)
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('update successfully user name')
        }).catch(function (error) {
            console.log(error)
        });
    }
    const cardStyle = {
        border: '1px solid cyan',
        padding: '30px',
        width: '300px',
        background: 'cyan',
        margin: '50px auto',
        borderRadius: '7px',
    }
    return (
        <div style={cardStyle}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onChange={() => setNewUser(!newUser)} label="New User Sign Up" />
                </Form.Group>
                {newUser && <Form.Group controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='name' onBlur={handleChange} type="text" placeholder="Enter Your Name" required />
                </Form.Group>}
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' onBlur={handleChange} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onBlur={handleChange} type="password" placeholder="Password" required />
                </Form.Group>

                {newUser && <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirm_password' onBlur={handleChange} type="password" placeholder="Confirm Your Password" required />
                </Form.Group>}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p style={{marginBottom: 0, marginTop: '15px'}}>-----------------or-----------------</p>
                <Button style={{marginTop:'20px'}} onClick={handleGoogle}>Continue with Google </Button>
            </Form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {
                user.success && <p style={{ color: 'green' }}>You are {newUser ? 'creted account' : 'loged In'} successfull</p>
            }
        </div>
    );

};

export default Login;

