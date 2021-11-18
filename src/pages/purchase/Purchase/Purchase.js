import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';

const Purchase = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [car, setCar] = useState({});
    const history = useHistory();

    const productDetailsRef = useRef();
    const mobileRef = useRef();
    const addressRef = useRef();

    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [tax, setTax] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:7007/products/${productId}`)
            .then(resp => resp.json())
            .then(data => setCar(data))

    }, [productId]);

    useEffect(() => {
        setSubTotal(parseInt(car.price));
        setShipping(300);
        setTax(parseInt(car.price) * 0.05);
        setGrandTotal(subTotal + shipping + tax);
    }, [car.price, subTotal, shipping, tax]);

    // Sending Order Info to Database 
    const handleCheckout = () => {
        const newOrder = {
            productId: `${productId}`,
            productDetails: `${productDetailsRef.current.value}`,
            quantity: 1,
            receiverEmail: `${user.email}`,
            receiverName: `${user.displayName}`,
            mobile: `${mobileRef.current.value}`,
            address: `${addressRef.current.value}`,
            status: 'Pending'
        };
        const idToken = localStorage.getItem('idToken');
        fetch(`http://localhost:7007/addOrder?email=${user.email}`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product successfully added.');
                    history.push('/my-orders');
                }
            })
    }

    return (
        <div className="container my-5">
            <h1 className="txt-primary mb-3">SHOPPING CART</h1>
            <div className="d-flex">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 px-4">
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" ref={productDetailsRef} className="form-control" id="floatingInput" placeholder=" " value={`Name & Model: ${car.name}, Mode: ${car.mode}, Year: ${car.year}, Type: ${car.type}, Color: ${car.color}`} readOnly />
                        <label htmlFor="floatingInput">Product Details</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="number" className="form-control" id="floatingInput" placeholder=" " value="1" readOnly />
                        <label htmlFor="floatingInput">Quantity</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="email" className="form-control" id="floatingInput" placeholder=" " value={user.email} readOnly />
                        <label htmlFor="floatingInput">Receiver Email</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder=" " value={user.displayName} readOnly />
                        <label htmlFor="floatingInput">Receiver Name</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <input type="text" ref={mobileRef} className="form-control" id="floatingInput" placeholder=" " />
                        <label htmlFor="floatingInput">Mobile</label>
                    </div>
                    <div className="form-floating mb-3 mx-auto">
                        <textarea ref={addressRef} className="form-control" placeholder=" " id="floatingTextarea2" style={{ height: "130px" }}></textarea>
                        <label for="floatingTextarea2">Address</label>
                    </div>

                </div>

                {/* Cart - Price Calculation  */}
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-3 px-4 shadow">
                    <h4>Cart Totals</h4>
                    <div className="border-bottom my-3"></div>
                    <div className="d-flex justify-content-between">
                        <p>Subtotal: </p>
                        <p>${subTotal} </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Shipping Charge: </p>
                        <p>${shipping}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Tax: </p>
                        <p>${tax} </p>
                    </div>
                    <div className="border-bottom my-3"></div>
                    <div className="d-flex justify-content-between fw-bold">
                        <p>Grand Total: </p>
                        <p>${grandTotal} </p>
                    </div>
                    <div className="mt-4">
                        <button onClick={handleCheckout} className="btn btn-success">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;