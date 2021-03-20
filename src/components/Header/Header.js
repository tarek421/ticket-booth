import React, { useContext } from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
    const [loggedInUser] = useContext(userContext);
    return (
        <Navbar bg="primary" variant="dark">
            <div className='container'>
                    <Navbar.Brand as={Link} to="/">Ticket Booth</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        {/* <Nav.Link as={Link} to="/">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/">Contact</Nav.Link> */}
                    </Nav>
                
                <Form inline>
                    <Button as={Link} to='/login' variant="outline-light">Login</Button>
                    <p>{loggedInUser.name}</p>
                </Form>
            </div>
        </Navbar>
    );
};

export default Header;