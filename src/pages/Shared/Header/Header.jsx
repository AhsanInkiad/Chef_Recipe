import React from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className='pt-4 pb-4 a' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='site-name'>TASTE OF</span> ITALY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features"> <span className='home-n-blog'>Home</span> </Nav.Link>
                            <Nav.Link href="#pricing"><span className='home-n-blog'>Blog</span></Nav.Link>
                        </Nav>
                        <Nav className='md:d-flex md:align-items-center'>
                            <Nav.Link href="#deets" className='d-flex align-items-center'>
                                <Image src="ss" roundedCircle />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <button className='custom-btn'> Login</button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;