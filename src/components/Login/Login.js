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
}else {
    firebase.app(); // if already initialized, use that one
 }

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })
    var provider = new firebase.auth.GoogleAuthProvider();
    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const handleFacebook = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                // var credential = result.credential;
                // var token = credential.accessToken;
                const {displayName, email} = result.user;
                const signInUser = {name:displayName, email}
                setLoggedInUser(signInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode,errorMessage,email,credential)
            });
    }
    const handleChange = (event) => {
        let isFeildValid = true;
        if (event.target.name === 'email') {
            isFeildValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            const passwordValidate = event.target.value.length >= 6;
            const passwordValidate2 = /\d{1}/.test(event.target.value);
            isFeildValid = (passwordValidate && passwordValidate2)
        }
        if (isFeildValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
    }
    return (
        <>
            <Form className='container login-form'>
                {loggedInUser.name}
                <h5>Create an account</h5>
                <Form.Group onBlur={handleChange} controlId="formBasicName">
                    <Form.Control className='form-input' type="text" placeholder="User Name" />
                </Form.Group>

                <Form.Group onBlur={handleChange} controlId="formBasicEmail">
                    <Form.Control className='form-input' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group onBlur={handleChange} controlId="formBasicPassword">
                    <Form.Control className='form-input' type="password" placeholder="Password" />
                </Form.Group>


                <button type="submit">
                    Create an account
                </button>
                <h6 style={{ marginTop: '10px' }}>already have an account? <a href="/login"> Login</a></h6>
                <Button onClick={handleFacebook}>Continue with Google </Button>
            </Form>
        </>
    );
};

export default Login;