import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (

        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand
                        as={Link}
                        to="/">
                        <img src='https://www.linkpicture.com/q/download_431.png' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav >

                            <Nav.Link
                                as={Link} to="/blogs">Blogs
                            </Nav.Link>
                            <Nav.Link
                                as={Link} to="/about">About
                            </Nav.Link>
                            {
                                user && <>
                                    <Nav.Link
                                        as={Link} to="/dashboard">Dashboard
                                    </Nav.Link>
                                    {/* <Nav.Link
                                        as={Link} to="/addItem">Add Item
                                    </Nav.Link>
                                    <Nav.Link
                                        as={Link} to="/manageItem">Manage Item
                                    </Nav.Link> */}
                                </>

                            }




                            {

                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                            <Nav.Link as={Link} to="/register">
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden font-bold">---</label>
                </div>
            </Navbar>
        </>

    );
};

export default Header;