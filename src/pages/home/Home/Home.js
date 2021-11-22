import React from 'react';
import Advantages from '../Advantages/Advantages';
import CauroselBanner from '../CauroselBanner/CauroselBanner';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div className="fadeIn">
            <CauroselBanner />
            <FeaturedCars />
            <Advantages />
            <Reviews />
        </div>
    );
};

export default Home;