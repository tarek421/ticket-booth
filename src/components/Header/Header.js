import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loggedInUser] = useContext(userContext);
    const {displayName} = loggedInUser;
    const nameStyle = {marginLeft: '20px', color: '#f1e5e5',marginTop: '10px'}
    return (
        <Navbar bg="primary" variant="dark">
            <div className='container'>
                    <Navbar.Brand as={Link} to="/">Ticket Booth</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact</Nav.Link>
                    </Nav>
                
                <Form inline>
                    <Button as={Link} to='/login' variant="outline-light">Login</Button>
                    <p style={nameStyle}>{loggedInUser.name}</p>
                    <p style={nameStyle}>{displayName}</p>
                </Form>
            </div>
        </Navbar>
    );
};

export default Header;