import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <div className='container'>
                <Navbar.Brand href="/">Ticket Booth</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/destination">Destination</Nav.Link>
                    <Nav.Link href="/">Blog</Nav.Link>
                    <Nav.Link href="/">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <Button href='/login' variant="outline-light">Login</Button>
                </Form>
            </div>
        </Navbar>
    );
};

export default Header;