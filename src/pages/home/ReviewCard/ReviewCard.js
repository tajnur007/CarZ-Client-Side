import React from 'react';
import './ReviewCard.css';
import heroImg from '../../../images/others/hero-form-shedow.png';

const ReviewCard = (props) => {
    const { name, review, image } = props.value;

    return (
        <div className="col-4 mx-3">
            <div>
                <img src={heroImg} alt="" className="img-fluid w-100" />
            </div>
            <div className="bg-light">
                <img src={image} alt="" className="review-image" />
            </div>
            <div className="px-3 review-body pb-3 ">
                <h4 className="py-3">{name}</h4>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;