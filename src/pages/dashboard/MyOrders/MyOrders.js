import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrdersData from './MyOrdersData';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const idToken = localStorage.getItem('idToken');
        fetch(`https://young-taiga-83856.herokuapp.com/myOrders?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => setOrders(data))
    }, [user.email]);

    console.log(orders);

    return (
        <div className="container my-5 fadeIn">
            <div className="text-start">
                <Link to="/dashboard"> {`< Back to Dashboard`} </Link>
            </div>
            <h1 className="txt-primary pb-3">MY ORDERS</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Details</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <MyOrdersData key={order._id} value={order} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;