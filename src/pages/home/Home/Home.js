import React from 'react';
import Advantages from '../Advantages/Advantages';
import CauroselBanner from '../CauroselBanner/CauroselBanner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <>
            <CauroselBanner />
            <FeaturedCars />
            <Advantages />
            <Reviews />
        </>
    );
};

export default Home;