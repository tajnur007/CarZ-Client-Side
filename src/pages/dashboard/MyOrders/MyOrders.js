import React from 'react';

const MyOrders = () => {
    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MY ORDERS</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Product Details</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lambourgini</td>
                        <td>1</td>
                        <td>Pending</td>
                        <td>
                            <button className="btn btn-warning me-2">Cancel</button>
                            <button className="btn btn-danger" >Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;