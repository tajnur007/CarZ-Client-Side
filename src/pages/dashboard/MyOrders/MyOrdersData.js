import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrdersData = (props) => {
    const { user } = useAuth();
    const { productDetails, quantity, status } = props.value;

    // Modal Controls 
    const [showCancel, setShowCancel] = useState(false);
    const handleCancleClose = () => setShowCancel(false);
    const handleCancleShow = () => setShowCancel(true);
    const [showDelete, setShowDelete] = useState(false);
    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    // Handle Order Cancel Method 
    const handleCancel = () => {
        const url = `http://localhost:7007/updateOrder?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        const newOrder = { ...props.value };
        newOrder.status = 'Canceled';
        console.log(newOrder);
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
                    handleCancleClose();
                }
            })
    }

    // Handle Order Delete Method 
    const handleDelete = () => {

    }

    return (
        <tr>
            <td>{productDetails}</td>
            <td>{quantity} </td>
            <td>{status}</td>
            <td>
                {/* Cancel Button trigger modal  */}
                <Button variant="warning" onClick={handleCancleShow} className="me-2">
                    Cancel
                </Button>

                <Modal
                    show={showCancel}
                    onHide={handleCancleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Cancel operation will premanently make this order as a Cancled Order. If you really want to cancel this order then click Confirm Cancel buton again, else Cancel.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCancleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleCancel}>Confirm Cancel</Button>
                    </Modal.Footer>
                </Modal>

                {/* Delete Button trigger modal  */}
                <Button variant="danger" onClick={handleDeleteShow} className="me-2">
                    Delete
                </Button>

                <Modal
                    show={showDelete}
                    onHide={handleDeleteClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Delete operation will premanently delete this order from database. If you really want to delete this order then click Confirm Delete buton again, else Cancel.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleDeleteClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>
    );
};

export default MyOrdersData;