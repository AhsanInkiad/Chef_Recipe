import React, { useContext } from 'react';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { getAuth, signOut } from "firebase/auth";
import ActiveLink from '../../../ActiveLink/ActiveLink';

const Header = () => {
    const auth = getAuth();
    const { user , setUser, setLoading} = useContext(AuthContext);

    const handleLogOut = (event) => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser(null);
                
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return (
        <div>
            <Navbar className='pt-2 pb-2 a border  border-light-subtle  border-start-0 border-end-0' collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='site-name'>TASTE OF</span> ITALY</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className='d-flex align-items-center'>
                                <ActiveLink className='link-to-home' to="/"><span className='home-n-blog'>Home</span></ActiveLink>
                            </div>
                            <div className='d-flex align-items-center ms-2'>
                                <ActiveLink className='link-to-home' to="/blogs"><span className='home-n-blog'>Blogs</span></ActiveLink>
                            </div>
                           
                        </Nav>
                        <Nav className='md:d-flex md:align-items-center '>
                            {user && <div className='d-flex align-items-center me-2'>
                                <Image className='user-er-pic' title={user.displayName} src={user.photoURL} roundedCircle />
                            </div>}
                            {user ?
                                <button onClick={handleLogOut} className='custom-btn'> Logout</button> :
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