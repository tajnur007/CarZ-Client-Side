import React, { useRef } from 'react';
import companyLogo from '../../../images/company/carz-logo-lg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { errorMsg, createAccount } = useAuth();

    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // Method for Email-Password Signup
    const handleEmailPasswordRegister = e => {
        e.preventDefault();
        createAccount(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
        formRef.current.reset();
    }

    return (
        <div>
            <div className="container container--mini my-5">
                {/* Company Logo  */}
                <img className="d-block mx-auto mt-5 w-25" src={companyLogo} alt="" />

                {/* Welcome Message  */}
                <h2 className="my-3"> Create An Account </h2>

                {/* Registration Form  */}
                <form className="d-flex justify-content-center" ref={formRef}>

                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-6">
                        {/* Name Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_login">Name</label>
                            <input type="text" className="form-control" ref={nameRef} placeholder="Your Name" required />
                        </div>

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
                            {errorMsg}
                        </p>

                        {/* Registration Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick={handleEmailPasswordRegister} type="submit" className="btn-1 w-100 mb-4">
                                <FontAwesomeIcon icon={faUserPlus} /> Register
                            </button>
                        </div>

                        <p className="text-muted">Already a member? <Link to='/login' className="fw-bold txt-primary">Login here</Link> </p>

                    </div>

                </form>

            </div >

        </div >
    );
};

export default Register;