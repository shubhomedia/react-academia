import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container className='justify-content-center'>
                        <Navbar.Brand href="#">All Rights Reserved @ ACADEMIA</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        </div >
    );
};

export default Footer;