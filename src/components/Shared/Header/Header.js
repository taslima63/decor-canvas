
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" defaultExpanded expand='lg'>
                <Container fluid>
                    <Navbar.Brand href="#" className='text-secondary
                    '>Decor Canvas</Navbar.Brand>
                    <Navbar.Toggle aria-controls=" responsive-navbar-nav" />
                    <Navbar.Offcanvas
                        id="responsive-navbar-nav"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Decor Canvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#services">Services</Nav.Link>
                                <Nav.Link href="#blogs">Blogs</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#login">Login</Nav.Link>

                            </Nav>

                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;