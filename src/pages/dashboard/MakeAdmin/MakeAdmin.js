import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const adminEmailRef = useRef();
    const { user } = useAuth();

    // Handel Make Admin Method 
    const handelMakeAdmin = () => {
        const url = `http://localhost:7007/makeAdmin?email=${user.email}`;
        const idToken = localStorage.getItem('idToken');
        const newAdminEmail = { email: `${adminEmailRef.current.value}` };
        fetch(url, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${idToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdminEmail)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    alert('Admin added successfully.');
                    adminEmailRef.current.value = '';
                }
            })
    }

    return (
        <div className="container my-5">
            <h1 className="txt-primary pb-3">MAKE AN ADMIN</h1>
            <h4 className="text-success">Give an email address to make an admin</h4>
            <div class="form-floating mb-3 w-50 mx-auto">
                <input type="email" ref={adminEmailRef} class="form-control" id="floatingInput" placeholder=" " />
                <label for="floatingInput">Admin Email</label>
            </div>
            <div><button className="btn-1 py-2" onClick={handelMakeAdmin} >Make Admin</button></div>
        </div>
    );
};

export default MakeAdmin;