import React, { useRef } from 'react';
import companyLogo from '../../../images/company/carz-logo-lg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    return (
        <div>
            <div className="container container--mini my-5">
                {/* Company Logo  */}
                <img className="d-block mx-auto mt-5 w-25" src={companyLogo} alt="" />

                {/* Welcome Message  */}
                <h2 className="my-3"> Sign Into Your Account </h2>

                {/* Login Form  */}
                <form className="d-flex justify-content-center" ref={formRef}>

                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">

                        {/* Email Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_login">Email</label>
                            <input type="email" className="form-control" ref={emailRef} placeholder="Email Address" required />
                        </div>

                        {/* Password Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_pass">Password</label>
                            <input type="password" className="form-control" ref={passwordRef} placeholder="Enter Password" required />
                        </div>

                        {/* Error message  */}
                        <p className="text-start text-danger mx-5 mb-3">

                        </p>

                        {/* Login Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick="" type="submit" className="btn-1 w-100 mb-4">
                                <FontAwesomeIcon icon={faSignInAlt} /> Login
                            </button>
                        </div>

                        <p>----- OR -----</p>

                        {/* Google Login Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick="" className="btn-1 py-2 w-100 mb-4">
                                <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                            </button>
                        </div>

                        <p className="text-muted">Don't have an account? <Link to='/register' className="fw-bold txt-primary">Register here</Link> </p>

                    </div>

                </form>

            </div >

        </div >
    );
};

export default Login;