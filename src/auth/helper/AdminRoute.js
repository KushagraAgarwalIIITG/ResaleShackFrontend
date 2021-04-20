//ROUTES ACCESSIBLE BY SIGNED IN USERS THAT HAS ROLE SET TO 1 (ADMIN)
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { isAutheticated } from './index';

function AdminRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) =>
        isAutheticated() && isAutheticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}


export default AdminRoute;
