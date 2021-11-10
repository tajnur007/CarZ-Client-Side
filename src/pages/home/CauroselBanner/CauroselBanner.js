import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../../images/others/caurosel-1.png';
import banner2 from '../../../images/others/caurosel-2.png';
import banner3 from '../../../images/others/caurosel-3.png';

const CauroselBanner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1>WELCOME TO CARZ ZONE</h1>
                        <Link to="/explore-cars"><button className="btn-1">EXPLORE MORE</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1>FIND YOUR DREAM CAR</h1>
                        <Link to="/explore-cars"><button className="btn-1">EXPLORE MORE</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt=""
                    />

                    <Carousel.Caption>
                        <h1>BEST PLACE FOR BUY A NEW CAR!</h1>
                        <Link to="/explore-cars"><button className="btn-1">EXPLORE MORE</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CauroselBanner;