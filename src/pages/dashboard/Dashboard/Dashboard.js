import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const activeItem = {
        fontWeight: "bold",
        color: "#d13b04",
        textDecoration: "none"
    };

    return (
        <div className="row dashboard-container">
            <div className="col-4 p-3 border-end">
                <p className="dashboard-item">
                    <NavLink className="dashboard-item-link" exact to="/pay" activeStyle={activeItem} >
                        Pay
                    </NavLink>
                </p>
                <p className="dashboard-item">
                    <NavLink className="dashboard-item-link" exact to="/myOrders" activeStyle={activeItem} >
                        My Orders
                    </NavLink>
                </p>
                <p className="dashboard-item">
                    <NavLink className="dashboard-item-link" exact to="/review" activeStyle={activeItem} >
                        Review
                    </NavLink>
                </p>
                <div className="border-top mt-3 pt-3">
                    <button className="btn-1">Logout</button>
                </div>
            </div>
            <div className="col-8">

            </div>

        </div>
    );
};

export default Dashboard;