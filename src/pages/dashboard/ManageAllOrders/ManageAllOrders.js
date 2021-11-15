import React from 'react';

const ManageAllOrders = () => {

    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MANAGE ORDERS</h1>
            <table class="table table-striped">
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
                    <tr>
                        <td>Lambourgini</td>
                        <td>1</td>
                        <td>Kazi Tajnur Islam</td>
                        <td>Gazipur, Bangladesh</td>
                        <td>
                            <select class="form-select form-select-sm" id="floatingSelectGrid">
                                <option className="text-muted" selected> --- Select One --- </option>
                                <option className="text-dark" value="Pending">Pending</option>
                                <option className="text-warning" value="Processing">Processing</option>
                                <option className="text-primary" value="Shipped">Shipped</option>
                                <option className="text-success" value="Delivered">Delivered</option>
                                <option className="text-danger" value="Cancel">Cancel</option>
                            </select>
                        </td>
                        <td>
                            <button className="btn btn-success" >Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;