import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import './AddProduct.css';

const AddProduct = () => {
    const { user } = useAuth();

    const formRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const speedRef = useRef();
    const modeRef = useRef();
    const yearRef = useRef();
    const fuelRef = useRef();
    const typeRef = useRef();
    const colorRef = useRef();
    const imageRef = useRef();
    const statusRef = useRef();

    // Handle Add Product 
    const handleAddProduct = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const speed = speedRef.current.value;
        const mode = modeRef.current.value;
        const year = yearRef.current.value;
        const fuel = fuelRef.current.value;
        const type = typeRef.current.value;
        const color = colorRef.current.value;
        const image = imageRef.current.value;
        const status = statusRef.current.value;

        // Sending Product Info to Database 
        const newCar = { name, price, speed, mode, year, fuel, type, color, image, status };
        const idToken = localStorage.getItem('idToken');
        fetch(`https://young-taiga-83856.herokuapp.com/addProduct?email=${user.email}`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product successfully added.');
                    formRef.current.reset();
                }
            })
    }


    return (
        <div className="container my-5 fadeIn">
            <h1 className="txt-primary pb-3">ADD A PRODUCT</h1>

            <form ref={formRef}>
                {/* All Input Fields  */}
                <div className="d-flex flex-wrap mb-3">
                    {/* Car Name and Model  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={nameRef} />
                        <label htmlFor="floatingInput">Car Name and Model</label>
                    </div>

                    {/* Car Price  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="number" className="form-control w-98" id="floatingInput" placeholder=" " ref={priceRef} />
                        <label htmlFor="floatingInput">Price</label>
                    </div>

                    {/* Car Speed  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="number" className="form-control w-98" id="floatingInput" placeholder=" " ref={speedRef} />
                        <label htmlFor="floatingInput">Speed/kmph</label>
                    </div>

                    {/* Driving Mode  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <select className="form-select w-98" id="floatingSelectGrid" ref={modeRef}>
                            <option defaultValue> --- Select One --- </option>
                            <option value="Auto">Auto</option>
                            <option value="Manual">Manual</option>
                            <option value="Both">Both</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Driving Mode</label>
                    </div>

                    {/* Release Year  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="number" className="form-control w-98" id="floatingInput" placeholder=" " ref={yearRef} />
                        <label htmlFor="floatingInput">Release Year</label>
                    </div>

                    {/* Fuel Type  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <select className="form-select w-98" id="floatingSelectGrid" ref={fuelRef}>
                            <option defaultValue> --- Select One --- </option>
                            <option value="Petrol">Petrol</option>
                            <option value="Octane">Octane</option>
                            <option value="Both">Both</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Fuel Type</label>
                    </div>

                    {/* Car Type  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <select className="form-select w-98" id="floatingSelectGrid" ref={typeRef}>
                            <option defaultValue> --- Select One --- </option>
                            <option value="Sports">Sports</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Crossover">Crossover</option>
                            <option value="Convertible">Convertible</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Car Type</label>
                    </div>

                    {/* Car Color  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={colorRef} />
                        <label htmlFor="floatingInput">Color</label>
                    </div>

                    {/* Image Link  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " ref={imageRef} />
                        <label htmlFor="floatingInput">Car Image Link</label>
                    </div>

                    {/* Available Status  */}
                    <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                        <select className="form-select w-98" id="floatingSelectGrid" ref={statusRef}>
                            <option defaultValue> --- Select One --- </option>
                            <option value="Available">Available</option>
                            <option value="Not Available">Not Available</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Available Status</label>
                    </div>
                </div>

                {/* Submit Button  */}
                <div>
                    <button onClick={handleAddProduct} type="submit" className="btn-1 py-2">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;