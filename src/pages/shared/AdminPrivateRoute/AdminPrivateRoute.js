import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Loading from '../Loading/Loading';

const AdminPrivateRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuth();

    if (isLoading) {
        return (<Loading />);
    }

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