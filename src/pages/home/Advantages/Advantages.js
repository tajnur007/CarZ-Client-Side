import React from 'react';
import './Advantages.css';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faHandshake, faHandHoldingUsd, faHeadset } from '@fortawesome/free-solid-svg-icons';

const Advantages = () => {
    return (
        <div className="container mb-5">
            <h1 className="txt-primary">OUR ADVANTAGES </h1>
            <h3 className="pb-3">Why you should buy from us? We provide you following features.</h3>

            <Row xs={1} md={3} lg={4} className="g-5">
                <div className="p-2 first-layer">
                    <div className="second-layer p-2">
                        <h1 className="pt-5">
                            <FontAwesomeIcon className="txt-primary txt-icon" icon={faShieldAlt} />
                        </h1>
                        <h3 className="py-3">Highly Secured</h3>
                        <p className="text-muted">
                            Security is one of the best aspects of our company. We provide the best security to our customers. Security is one of the best aspects of our company. We provide the best security to our customers.
                        </p>
                    </div>
                </div>

                <div className="p-2 first-layer">
                    <div className="second-layer p-2">
                        <h1 className="pt-5">
                            <FontAwesomeIcon className="txt-primary txt-icon" icon={faHandshake} />
                        </h1>
                        <h3 className="py-3">Trusted Agents</h3>
                        <p className="text-muted">
                            Security is one of the best aspects of our company. We provide the best security to our customers. Security is one of the best aspects of our company. We provide the best security to our customers.
                        </p>
                    </div>
                </div>

                <div className="p-2 first-layer">
                    <div className="second-layer p-2">
                        <h1 className="pt-5">
                            <FontAwesomeIcon className="txt-primary txt-icon" icon={faHandHoldingUsd} />
                        </h1>
                        <h3 className="py-3">Get an Offer</h3>
                        <p className="text-muted">
                            Security is one of the best aspects of our company. We provide the best security to our customers. Security is one of the best aspects of our company. We provide the best security to our customers.
                        </p>
                    </div>
                </div>

                <div className="p-2 first-layer">
                    <div className="second-layer p-2">
                        <h1 className="pt-5">
                            <FontAwesomeIcon className="txt-primary txt-icon" icon={faHeadset} />
                        </h1>
                        <h3 className="py-3">Free Support</h3>
                        <p className="text-muted">
                            Security is one of the best aspects of our company. We provide the best security to our customers. Security is one of the best aspects of our company. We provide the best security to our customers.
                        </p>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Advantages;