import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch('https://young-taiga-83856.herokuapp.com/reviews')
            .then(resp => resp.json())
            .then(data => setReviews(data))

    }, []);


    return (
        <div className="review-main py-5 ">
            <h1 className="text-light">CUSTOMER REVIEWS</h1>
            <div className=" container d-flex flex-nowrap review-container">
                {
                    reviews[0]?.name && reviews.map(data => <ReviewCard key={data._id} value={data}></ReviewCard>)
                    // reviews[0]?.name && reviews.map(data => console.log(data))
                }

            </div>
        </div>
    );
};

export default Reviews;