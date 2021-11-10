import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CarCard from '../../shared/CarCard/CarCard';

const FeaturedCars = () => {
    const [cars, setCars] = useState({});
    const myarr = [0, 1, 2, 3, 4, 5];

    useEffect(() => {
        fetch('./fakedb.json')
            .then(resp => resp.json())
            .then(data => setCars(data))

    }, []);

    return (
        <div className="container my-5 pb-5">
            {/* Section Heading  */}
            <h1>FEATURED CARS </h1>
            <h3 className="pb-4">We provide the best cars in the world. Here are some special pick for you</h3>

            <Row xs={1} md={3} lg={3} className="g-4">
                {
                    myarr.map(value => <CarCard key="" value={cars[value]}></CarCard>)
                }
            </Row>

        </div>
    );
};

export default FeaturedCars;