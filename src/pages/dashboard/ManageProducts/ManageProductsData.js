import React, { useRef } from 'react';

const ManageProductsData = (props) => {
    const { name, status } = props.value;
    const statusRef = useRef();

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
                <button className="btn btn-success me-2" >Update</button>
                <button className="btn btn-danger" >Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsData;