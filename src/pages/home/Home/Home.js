import React from 'react';
import Advantages from '../Advantages/Advantages';
import CauroselBanner from '../CauroselBanner/CauroselBanner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';

const Home = () => {
    return (
        <>
            <CauroselBanner />
            <FeaturedCars />
            <Advantages />
        </>
    );
};

export default Home;