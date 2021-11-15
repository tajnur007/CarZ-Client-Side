import React from 'react';

const ManageProducts = () => {
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
                    <tr>
                        <td>Lambourgini</td>
                        <td>Available/Not Available</td>
                        <td>
                            <button className="btn btn-danger" >Delete Product</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;