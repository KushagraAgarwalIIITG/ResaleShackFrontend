//ROUTES ACCESSIBLE BY SIGNED IN USERS
import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import { isAutheticated } from './index';
function PrivateRoute({ component:Component, ...rest }) {
   
    return (
      <Route
        {...rest}
        render={(props) =>
          isAutheticated() ? (
            <Component {...props}/>
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


export default PrivateRoute;
