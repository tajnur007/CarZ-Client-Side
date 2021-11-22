import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const reviewRef = useRef();
    const photoURL = user.photoURL || 'http://bpsc.teletalk.com.bd/ncad/images/nobody.png';

    // Sending Review to Database 
    const handleReview = () => {
        const newReview = {
            name: `${user.displayName}`,
            review: `${reviewRef.current.value}`,
            image: `${photoURL}`
        };
        const idToken = localStorage.getItem('idToken');
        fetch(`https://young-taiga-83856.herokuapp.com/addReview?email=${user.email}`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your valueable review successfully recorded.');
                    reviewRef.current.value = '';
                }
            })
    }

    return (
        <div className="container my-5 fadeIn">
            <div className="text-start">
                <Link to="/dashboard"> {`< Back to Dashboard`} </Link>
            </div>
            <h1 className="txt-primary pb-3">MY REVIEW</h1>
            <div className="form-floating w-75 mx-auto">
                <textarea ref={reviewRef} className="form-control" placeholder="Share your experience with us" id="floatingTextarea2" style={{ height: "150px" }} ></textarea>
                <label for="floatingTextarea2">Share your experience with us</label>
            </div>
            <div>
                <button onClick={handleReview} className="btn-1 my-3 py-2">Submit Review</button>
            </div>
        </div>
    );
};

export default Review;