
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

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
                            <NavLink as={Link} to='/services'>Services</NavLink>
                            <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/login'> Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;