import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import userIcon from '../../../images/others/user-icon.png';

const Dashboard = () => {

    return (
        <div className="dashboard-container d-flex">
            <div className="col-3 p-3 pt-5 side-menu border-end">
                <p className="dashboard-item">
                    <Link className="dashboard-item-link" to="/dashboard/pay" >
                        Pay
                    </Link>
                </p>
                <p className="dashboard-item">
                    <Link className="dashboard-item-link" to="/dashboard/my-orders" >
                        My Orders
                    </Link>
                </p>
                <p className="dashboard-item">
                    <Link className="dashboard-item-link" to="/dashboard/review" >
                        Review
                    </Link>
                </p>
                <div className="border-top mt-3 pt-3">
                    <button className="btn-1">Logout</button>
                </div>
            </div>
            <div className="col-9 container pt-5">
                <div><img src={userIcon} alt="" /></div>
                <div>
                    <h3>"Username Here"</h3>
                    <p>Email: "Email Here"</p>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;