import React from 'react';
import bannerImage from '../../../images/others/banner-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
        <div>
            {/* Banner Image  */}
            <div>
                <img className="img-fluid" src={bannerImage} alt="" />
            </div>

            <h1 className="txt-primary pt-5">CONTACT WITH US</h1>

            {/* Main Body  */}
            <div className="container d-flex flex-wrap my-5">
                {/* Left Column  */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    {/* Get In Touch  */}
                    <div className="text-start">
                        <h2 className="pb-2 fw-bold">Get in Touch</h2>
                        <div className="py-2">
                            <h4><FontAwesomeIcon icon={faMapMarkerAlt} className="txt-primary" /> Address</h4>
                            343, BIDC Bazar, DUET, Gazipur, Bangladesh.
                        </div>
                        <div className="pt-2">
                            Call Us Now!
                            <h4><FontAwesomeIcon icon={faPhoneAlt} className="txt-primary" /> 01721-919296</h4>
                        </div>
                        <div className="pt-2">
                            Do you have a Question?
                            <h4><FontAwesomeIcon icon={faEnvelope} className="txt-primary" /> info@carz.com</h4>
                        </div>
                    </div>

                    {/* Opening Hours  */}
                    <div className="text-start">
                        <h2 className="pt-5 pb-2 fw-bold">Opening Hours</h2>
                        <div className="py-2 d-flex justify-content-between pe-5">
                            <div>
                                <p>Saturday</p>
                                <p>Sunday - Thursday</p>
                                <p>Friday</p>
                            </div>
                            <div>
                                <p>10:00 AM - 06:00 PM</p>
                                <p>07:00 AM - 08:00 PM</p>
                                <p>Holiday</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column  */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <h2 className="pb-2 fw-bold">Questions? Let our experts help!</h2>

                    {/* Message Form  */}
                    <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 py-3">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Name" required />
                            </div>
                            <div className="col-lg-6 col-md-6 py-3">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="col-lg-6 col-md-6 py-3">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="col-lg-6 col-md-6 py-3">
                                <input type="text" className="form-control" name="number" id="number" placeholder="Number" required />
                            </div>
                            <div className="col-lg-12 col-md-12 py-3">
                                <textarea name="message" className="form-control" id="message" cols="30" rows="7" placeholder="Message" required  ></textarea>
                            </div>
                            <div className="col-lg-12 col-md-12 py-3">
                                <button className="btn-1">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;