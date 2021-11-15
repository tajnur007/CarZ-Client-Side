import React from 'react';

const MakeAdmin = () => {
    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MAKE AN ADMIN</h1>
            <h4 className="text-success">Give an email address to make an admin</h4>
            <div class="form-floating mb-3 w-50 mx-auto">
                <input type="email" class="form-control" id="floatingInput" placeholder=" " />
                <label for="floatingInput">Admin Email</label>
            </div>
            <div><button className="btn-1 py-2">Make Admin</button></div>
        </div>
    );
};

export default MakeAdmin;