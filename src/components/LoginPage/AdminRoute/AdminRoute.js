import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, admin, isLoading} = useAuth();
    if (isLoading)
    {
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default AdminRoute;