import React from 'react';

const Review = () => {
    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MY REVIEW</h1>
            <div className="form-floating w-75 mx-auto">
                <textarea className="form-control" placeholder="Share your experience with us" id="floatingTextarea2" style={{ height: "150px" }} ></textarea>
                <label for="floatingTextarea2">Share your experience with us</label>
            </div>
            <div>
                <button className="btn-1 my-3 py-2">Submit Review</button>
            </div>
        </div>
    );
};

export default Review;