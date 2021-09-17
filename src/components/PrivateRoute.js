import React  from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    const { userInfo } = useSelector(state => state?.userLogin);

    return (
        <Route
            {...rest}
            render={({ location }) =>
            userInfo?.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
            }
        />
    );
};

export default PrivateRoute;