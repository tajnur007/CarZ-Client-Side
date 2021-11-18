import React from 'react';
import './CarCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faCog, faCalendar, faGasPump, faCar, faPallet } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const CarCard = (props) => {
    const { _id, name, price, speed, mode, year, fuel, type, color, image } = props.value;

    return (
        <div className="car-box">
            <div className="car-thumbnail-photo">
                <img src={image} alt="" className="img-fluid w-100 rad" />
            </div>
            <div className="for">FOR SALE</div>
            <div className="car-info">
                <h3>{name}</h3>
                <h6>${price}/piece</h6>
                <p> <FontAwesomeIcon className="txt-primary" icon={faRoad} /> {speed} <FontAwesomeIcon className="txt-primary ms-3" icon={faCog} /> {mode} <FontAwesomeIcon className="txt-primary ms-3" icon={faCalendar} /> {year} </p>
                <p> <FontAwesomeIcon className="txt-primary" icon={faGasPump} /> {fuel} <FontAwesomeIcon className="txt-primary ms-3" icon={faCar} /> {type} <FontAwesomeIcon className="txt-primary ms-3" icon={faPallet} /> {color} </p>
                <Link to={`/purchase/${_id}`}><button className="btn-1">BUY NOW</button></Link>
            </div>

        </div>
    );
};

export default CarCard;