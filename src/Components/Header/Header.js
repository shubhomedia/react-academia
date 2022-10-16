import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ACADEMIA

                    </Navbar.Brand>
                    <div className="me-auto">
                        <nav className='navbar-nav'>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/courses">Courses</NavLink>
                            <NavLink className="nav-link" to="/payment">Payment</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </nav>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;