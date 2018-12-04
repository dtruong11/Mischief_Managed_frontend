import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const UnAuthenticatedRouteOrg = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return isLoggedIn ? (
        <Redirect
          to={{
            pathname: "/organizers/landing", //later change to homepage
            state: { from: props.location }
          }}
        />
      ) : (
          <Component {...props} {...rest} />
        )
    }
    }
  />
);

export default UnAuthenticatedRouteOrg