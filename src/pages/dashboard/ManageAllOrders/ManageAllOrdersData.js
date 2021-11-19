import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrdersData = (props) => {
    const { user } = useAuth();
    const statusRef = useRef();
    const { productDetails, quantity, receiverName, address, status } = props.value;

    // Handle Order Update Method 
    const handleUpdate = () => {
        const url = `http://localhost:7007/updateOrder?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        const newOrder = { ...props.value };
        newOrder.status = `${statusRef.current.value}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('Order status updated successfully.');
                }
            })
    }

    return (
        <tr>
            <td>{productDetails}</td>
            <td>{quantity}</td>
            <td>{receiverName}</td>
            <td>{address}</td>
            <td>
                <select ref={statusRef} class="form-select form-select-sm" id="floatingSelectGrid">
                    <option className="text-muted" defaultValue> {status} </option>
                    <option className="text-dark" value="Pending">Pending</option>
                    <option className="text-warning" value="Processing">Processing</option>
                    <option className="text-primary" value="Shipped">Shipped</option>
                    <option className="text-success" value="Delivered">Delivered</option>
                    <option className="text-danger" value="Canceled">Canceled</option>
                </select>
            </td>
            <td>
                <button onClick={handleUpdate} className="btn btn-success" >Update</button>
            </td>
        </tr>
    );
};

export default ManageAllOrdersData;