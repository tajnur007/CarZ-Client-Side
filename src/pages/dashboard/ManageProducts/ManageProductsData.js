import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageProductsData = (props) => {
    const { name, status } = props.value;
    const statusRef = useRef();
    const { user } = useAuth();

    // Modal Controls 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Handle Update Method 
    const handleUpdate = () => {
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

    // Handle Delete Method 
    const handleDelete = () => {
        const url = `http://localhost:7007/deleteProduct?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        const car = { ...props.value };
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    handleClose();
                }
            })

    }


    return (
        <tr>
            <td>{name}</td>
            <td>
                <select className="form-select" id="floatingSelectGrid" ref={statusRef}>
                    <option defaultValue> {status} </option>
                    {
                        status === 'Available' ? '' : <option value="Available">Available</option>
                    }
                    {
                        status === 'Available' ? <option value="Not Available">Not Available</option> : ''
                    }

                </select>
            </td>
            <td>
                <button onClick={handleUpdate} className="btn btn-success me-2" >Update</button>
                {/* Button trigger modal  */}
                <Button variant="danger" onClick={handleShow}>
                    Delete
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Delete operation will premanently delete this product from database. If you really want to delete this product then click Confirm Delete buton again, else Cancel.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    );
};

export default ManageProductsData;