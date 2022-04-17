
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">Decor Canvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#blogs">Blogs</Nav.Link>
                            <Nav.Link href="home#about">About</Nav.Link>
                            <Nav.Link href="home#login">Login</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;