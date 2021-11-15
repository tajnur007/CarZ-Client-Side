import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">ADD A PRODUCT</h1>

            <div className="d-flex flex-wrap mb-3">
                {/* Car Name and Model  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Car Name and Model</label>
                </div>

                {/* Car Price  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Price</label>
                </div>

                {/* Car Speed  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Speed/kmph</label>
                </div>

                {/* Driving Mode  */}
                <div class="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <select class="form-select w-98" id="floatingSelectGrid">
                        <option selected> --- Select One --- </option>
                        <option value="Auto">Auto</option>
                        <option value="Manual">Manual</option>
                        <option value="Both">Both</option>
                    </select>
                    <label for="floatingSelectGrid">Driving Mode</label>
                </div>

                {/* Release Year  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Release Year</label>
                </div>

                {/* Fuel Type  */}
                <div class="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <select class="form-select w-98" id="floatingSelectGrid">
                        <option selected> --- Select One --- </option>
                        <option value="Petrol">Petrol</option>
                        <option value="Octane">Octane</option>
                        <option value="Both">Both</option>
                    </select>
                    <label for="floatingSelectGrid">Fuel Type</label>
                </div>

                {/* Car Type  */}
                <div class="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <select class="form-select w-98" id="floatingSelectGrid">
                        <option selected> --- Select One --- </option>
                        <option value="Sports">Sports</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Coupe">Coupe</option>
                        <option value="Crossover">Crossover</option>
                        <option value="Convertible">Convertible</option>
                    </select>
                    <label for="floatingSelectGrid">Car Type</label>
                </div>

                {/* Car Color  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Color</label>
                </div>

                {/* Image Link  */}
                <div className="form-floating mb-3 col-12 col-sm-12 col-md-6 col-lg-6 ">
                    <input type="text" className="form-control w-98" id="floatingInput" placeholder=" " />
                    <label for="floatingInput">Car Image Link</label>
                </div>
            </div>

            {/* Submit Button  */}
            <div>
                <button className="btn-1 py-2">Add Product</button>
            </div>

        </div>
    );
};

export default AddProduct;