import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container className='justify-content-end'>
                        <Navbar.Brand href="#">All Rights Reserved @ ACADEMIA</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Services</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Payment</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div >
    );
};

export default Footer;