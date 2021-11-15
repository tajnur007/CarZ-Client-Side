import React from 'react';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import companyImage from '../../../images/company/carz-logo-md.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    const activeItem = {
        fontWeight: "bold",
        color: "#d13b04",
        textDecoration: "none"
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top shadow">
                <Container>
                    {/* Company Image  */}
                    <div>
                        <Link to="/" ><img className="img-fluid w-25 float-start" src={companyImage} alt="" /></Link>
                    </div>

                    {/* Nav Items  */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <div className="ms-auto d-flex">
                            <div>
                                <NavLink className="navItem" exact to="/" activeStyle={activeItem} >
                                    Home
                                </NavLink>
                                <NavLink className="navItem" to="/explore-cars" activeStyle={activeItem} >
                                    Explore Cars
                                </NavLink>
                                <NavLink className="navItem" to="/contact" activeStyle={activeItem} >
                                    Contact
                                </NavLink>

                                {/* Dashboard  */}
                                {
                                    user.email ? <NavLink className="navItem" to="/dashboard" activeStyle={activeItem} >
                                        Dashboard
                                    </NavLink> : ''
                                }
                            </div>
                            <div className="border-start border-2 border-secondary ms-3">
                                {/* User Name  */}
                                {
                                    user.email ? <span className="text-primary px-2">{user.displayName}</span> : ''
                                }

                                {/* Logout Button or Login Link  */}
                                {
                                    user.email ?
                                        <button onClick={logout} className="btn-1 py-1 px-2">Logout</button>
                                        :
                                        <NavLink className="navItem" to="/login" activeStyle={activeItem} >
                                            Login
                                        </NavLink>
                                }
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;