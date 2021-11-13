import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import bannerImage from '../../../images/others/banner-1.png';
import CarCard from '../../shared/CarCard/CarCard';

const ExploreCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('./fakedb.json')
            .then(resp => resp.json())
            .then(data => setCars(data))

    }, []);


    return (
        <div className="mb-5">
            <div>
                <img src={bannerImage} alt="" className="img-fluid w-100" />
            </div>
            <h1 className="mt-5 mb-3">AVAILABLE CARS</h1>

            <div className="container">
                <Row xs={1} md={3} lg={3} className="g-4">
                    {
                        // cars[0]?.name && cars.map(value => <CarCard key="" value={cars[value]}></CarCard>)
                        cars[0]?.name && cars.map(data => <CarCard key="" value={data}></CarCard>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ExploreCars;