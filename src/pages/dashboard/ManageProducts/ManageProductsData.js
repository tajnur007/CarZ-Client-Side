import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProductsData = (props) => {
    const { name, status } = props.value;
    const statusRef = useRef();
    const { user } = useAuth();

    // Handel Update Method 
    const handelUpdate = () => {
        const url = `http://localhost:7007/updateProduct?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        const newCar = { ...props.value };
        newCar.status = statusRef.current.value;
        console.log(newCar);
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('Product update successful');
                }
            })
    }

    return (
        <tr>
            <td>{name}</td>
            <td>
                <select className="form-select" id="floatingSelectGrid" ref={statusRef}>
                    <option selected> {status} </option>
                    {
                        status === 'Available' ? '' : <option value="Available">Available</option>
                    }
                    {
                        status === 'Available' ? <option value="Not Available">Not Available</option> : ''
                    }

                </select>
            </td>
            <td>
                <button onClick={handelUpdate} className="btn btn-success me-2" >Update</button>
                <button className="btn btn-danger" >Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsData;