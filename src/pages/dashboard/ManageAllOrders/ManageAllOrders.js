import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrdersData from './ManageAllOrdersData';

const ManageAllOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://young-taiga-83856.herokuapp.com/orders?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => setOrders(data))

    }, [user.email]);

    return (
        <div className="container my-5 fadeIn">
            <div className="text-start">
                <Link to="/dashboard"> {`< Back to Dashboard`} </Link>
            </div>
            <h1 className="txt-primary pb-3">MANAGE ORDERS</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Details</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Receiver</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <ManageAllOrdersData key={order._id} value={order} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;