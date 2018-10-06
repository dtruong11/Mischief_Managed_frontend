import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthenticatedRouteOrg = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isLoggedIn ? (
        <Component {...props} {...rest} />
      ) : (
          <Redirect
            to={{
              pathname: "/login/organizers",
              state: { from: props.location }
            }}
          />
        )
    }
    }
  />
);

export default AuthenticatedRouteOrg