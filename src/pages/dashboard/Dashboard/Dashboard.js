import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import userIcon from '../../../images/others/user-icon.png';
import useAuth from '../../../hooks/useAuth';

const Dashboard = () => {
    const { user, isAdmin } = useAuth();

    return (
        <div className="dashboard-container d-flex">
            {/* Side Menu  */}
            <div className="col-3 p-3 pt-5 side-menu border-end">
                {/* Normal User Menu  */}
                <div>
                    <p className="dashboard-item">
                        {
                            !isAdmin ? <Link className="dashboard-item-link" to="/pay" >
                                Pay
                            </Link> : ''
                        }
                    </p>
                    <p className="dashboard-item">
                        {
                            !isAdmin ? <Link className="dashboard-item-link" to="/my-orders" >
                                My Orders
                            </Link> : ''
                        }
                    </p>
                    <p className="dashboard-item">
                        {
                            !isAdmin ? <Link className="dashboard-item-link" to="/review" >
                                Review
                            </Link> : ''
                        }
                    </p>
                </div>

                {/* Admin User Menu  */}
                <div>
                    <p className="dashboard-item">
                        {
                            isAdmin ? <Link className="dashboard-item-link" to="/add-product" >
                                Add A Product
                            </Link> : ''
                        }
                    </p>
                    <p className="dashboard-item">
                        {
                            isAdmin ? <Link className="dashboard-item-link" to="/manage-products" >
                                Manage Products
                            </Link> : ''
                        }
                    </p>
                    <p className="dashboard-item">
                        {
                            isAdmin ? <Link className="dashboard-item-link" to="/manage-all-orders" >
                                Manage All Orders
                            </Link> : ''
                        }
                    </p>
                    <p className="dashboard-item">
                        {
                            isAdmin ? <Link className="dashboard-item-link" to="/make-admin" >
                                Make An Admin
                            </Link> : ''
                        }
                    </p>
                </div>

                {/* Logout Button  */}
                <div className="border-top mt-3 pt-3">
                    <button className="btn-1">Logout</button>
                </div>
            </div>

            {/* Main Section  */}
            <div className="col-9 container pt-5">
                <div><img src={userIcon} alt="" /></div>
                <div>
                    <h3>"{user.displayName}"</h3>
                    <p>Email: "{user.email}"</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;