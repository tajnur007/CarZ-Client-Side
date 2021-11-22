import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ManageProductsData from './ManageProductsData';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://young-taiga-83856.herokuapp.com/products')
            .then(resp => resp.json())
            .then(data => setCars(data))

    }, []);

    return (
        <div className="container my-5 fadeIn">
            <div className="text-start">
                <Link to="/dashboard"> {`< Back to Dashboard`} </Link>
            </div>
            <h1 className="txt-primary pb-3">MANAGE PRODUCTS</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Car Name and Model</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => <ManageProductsData key={car._id} value={car} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;