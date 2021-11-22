import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div className="container my-5 fadeIn">
            <div className="text-start">
                <Link to="/dashboard"> {`< Back to Dashboard`} </Link>
            </div>
            <h3 className="mb-3">Hang On!</h3>
            <h1>Payment system is coming soon...</h1>
        </div>
    );
};

export default Pay;