import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="test d-flex justify-content-center align-items-center">
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;