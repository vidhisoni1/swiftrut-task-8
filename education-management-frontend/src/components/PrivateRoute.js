import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => {
    const { user } = useContext(AuthContext);

    return (
        <Route
            {...rest}
            render={props =>
                user && allowedRoles.includes(user.role) ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
