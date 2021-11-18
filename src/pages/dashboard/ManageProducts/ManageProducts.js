import React, { useEffect, useState } from 'react';
import ManageProductsData from './ManageProductsData';

const ManageProducts = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7007/products')
            .then(resp => resp.json())
            .then(data => setCars(data))

    }, []);

    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MANAGE PRODUCTS</h1>
            <table class="table table-striped">
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