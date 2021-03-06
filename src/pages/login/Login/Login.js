import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router';
import companyLogo from '../../../images/company/carz-logo-lg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Loading from '../../shared/Loading/Loading';

const Login = () => {
    const { setUser, errorMsg, setErrorMsg, login, googleLogin, isLoading, setIsLoading } = useAuth();

    let history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from?.pathname || '/';

    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    // Method for Email-Password Login
    const handleEmailPasswordLogin = e => {
        setIsLoading(true);
        e.preventDefault();

        login(emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                setErrorMsg('');
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMsg(error.message);
            })
            .finally(() => setIsLoading(false));

        formRef.current.reset();
    }

    // Method for Google Login
    const handleGoogleLogin = e => {
        setIsLoading(true);
        e.preventDefault();

        googleLogin()
            .then((result) => {
                setUser(result.user);
                setErrorMsg('');

                // User Info Send to Database 
                const name = result.user.displayName;
                const email = result.user.email;
                const newUser = { name, email };
                fetch('https://young-taiga-83856.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                // Redirect Process
                history.push(redirect_uri);
            }).catch((error) => {
                setErrorMsg(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="fadeIn">
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
                            <input type="email" className="form-control" ref={emailRef} placeholder="Email Address" />
                        </div>

                        {/* Password Input  */}
                        <div className="form-group text-start mx-5 mb-3">
                            <label htmlFor="user_pass">Password</label>
                            <input type="password" className="form-control" ref={passwordRef} placeholder="Enter Password" />
                        </div>

                        {/* Error message  */}
                        <p className="text-start text-danger mx-5 mb-3">
                            {errorMsg}
                        </p>

                        {/* Login Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick={handleEmailPasswordLogin} type="submit" className="btn-1 w-100 mb-4">
                                <FontAwesomeIcon icon={faSignInAlt} /> Login
                            </button>
                        </div>

                        <p>----- OR -----</p>

                        {/* Google Login Button  */}
                        <div className="form-group text-start mx-5">
                            <button onClick={handleGoogleLogin} className="btn-1 py-2 w-100 mb-4">
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