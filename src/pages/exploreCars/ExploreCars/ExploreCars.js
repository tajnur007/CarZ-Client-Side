import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import bannerImage from '../../../images/others/banner-1.png';
import CarCard from '../../shared/CarCard/CarCard';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7007/products')
            .then(resp => resp.json())
            .then(data => setCars(data))

    }, []);

    useEffect(() => {
        setFilteredCars(cars.filter(car => car.status === 'Available'));
    }, [cars])


    return (
        <div className="mb-5">
            <div>
                <img src={bannerImage} alt="" className="img-fluid w-100" />
            </div>
            <h1 className="mt-5 mb-3">AVAILABLE CARS</h1>

            <div className="container">
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        filteredCars.map(car => <CarCard key={car._id} value={car}></CarCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ExploreCars;