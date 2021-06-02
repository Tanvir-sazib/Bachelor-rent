import React from 'react';
import '../../utils/css/NavBar.css'
import { Nav, Navbar } from 'react-bootstrap';
import Button from './Button'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Link to='/' style={{ fontSize: '27px' }}>Bachelor.</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#asas">About</Nav.Link>
                        <Nav.Link href="#dsd">Services</Nav.Link>
                        <Nav.Link href="#sadd">Contact</Nav.Link>
                        <Button className='btn-brand' title='Login' />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;