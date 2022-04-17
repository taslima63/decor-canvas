
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/">Decor Canvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav>
                            <NavLink as={Link} to='/services'>Services</NavLink>
                            <NavLink as={Link} to='/reviews'>Reviews</NavLink>
                            <Nav.Link as={Link} to='/blogs' >Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                : <Nav.Link eventKey={2} href="/login">
                                    Login
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;