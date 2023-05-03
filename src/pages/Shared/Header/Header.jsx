import React, { useContext } from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar className='pt-2 pb-2 a border  border-light-subtle  border-start-0 border-end-0' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='site-name'>TASTE OF</span> ITALY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className='d-flex align-items-center'>
                                <Link className='link-to-home' to="/"><span className='home-n-blog'>Home</span></Link>
                            </div>
                            <Nav.Link href="#pricing"><span className='home-n-blog'>Blog</span></Nav.Link>
                        </Nav>
                        <Nav className='md:d-flex md:align-items-center'>
                            {user && <div className='d-flex align-items-center'>
                                <Image src="ss" roundedCircle />
                            </div>}
                            {user && <p className='text-white d-flex align-items-center'>{user.displayName}</p>}

                            {user ?
                                <button className='custom-btn'> Logout</button> :
                                <Link to="/login">
                                    <button className='custom-btn'> Login</button>
                                </Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;