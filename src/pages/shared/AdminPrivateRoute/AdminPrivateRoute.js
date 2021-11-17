import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const { user, isAdmin } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminPrivateRoute;