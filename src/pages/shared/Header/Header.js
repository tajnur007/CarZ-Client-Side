import React from 'react';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import companyImage from '../../../images/company/carz-logo-md.png';

const Header = () => {
    const activeItem = {
        fontWeight: "bold",
        color: "#d13b04",
        textDecoration: "none"
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                            </div>
                            <div className="border-start border-2 border-secondary ms-3">
                                <NavLink className="navItem" to="/login" activeStyle={activeItem} >
                                    Login
                                </NavLink>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;