import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import companyImage from '../../../images/company/carz-logo-md.png';

const Footer = () => {
    return (
        <>
            <footer className="pt-5 bg-dark">
                <div className="container">
                    <div className="row">
                        {/* First Section  */}
                        <div className="col-sm-12 col-md-12 col-lg-4 text-start">
                            {/* Company Logo with Name  */}
                            <div>
                                <img className="pb-3 w-75 img-fluid" src={companyImage} alt="" />
                            </div>

                            {/* Short Description  */}
                            <p className="text-muted">CarZ is number #1 car dealer company in the World. We have many different type of cars as your expectation. Visit "About Us" page to know more about CarZ. </p>
                        </div>

                        {/* Second Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-2 text-start">
                            <h5 className="text-light">Company</h5>
                            <Link to="/" className="footer-links">Home</Link> <br />
                            <Link to="/" className="footer-links">About Us</Link> <br />
                            <Link to="/" className="footer-links">Community Blog</Link> <br />
                            <Link to="/" className="footer-links">Our Team</Link> <br />
                            <Link to="/contacts" className="footer-links">Contact Us</Link> <br />
                        </div>

                        {/* Third Section  */}
                        <div className="col-sm-6 col-md-4 col-lg-3 text-start">
                            <h5 className="text-light">Links</h5>
                            <Link to="/" className="footer-links">Gallery</Link> <br />
                            <Link to="/" className="footer-links">FAQ's</Link> <br />
                            <Link to="/" className="footer-links">Work with Us</Link> <br />
                            <Link to="/" className="footer-links">Privacy Policy</Link> <br />
                        </div>

                        {/* Fourth Section  */}
                        <div className="col-sm-12 col-md-4 col-lg-3 text-start">
                            <h5 className="text-light">Contact Us</h5>

                            <p className="text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-app-primary" /> 343, BIDC Bazar, DUET, Gazipur, Bangladesh.</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faPhoneAlt} className="text-app-primary" /> 01721-919296</p>

                            <p className="text-muted"><FontAwesomeIcon icon={faEnvelope} className="text-app-primary" /> info@carz.com</p>

                            {/* Social Icons  */}
                            <div>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                                </Link>
                                <Link to="/" className="">
                                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Separate Line  */}
                    <div className="separate-line my-4"></div>

                    {/* Footer Lower Section  */}
                    <div className="pb-5 text-muted">
                        Copyright @ 2021, CARZ. All rights reserved. <br />
                        Developed By: KAZI TAJNUR ISLAM
                    </div>

                </div>
            </footer>
        </>
    );
};

export default Footer;