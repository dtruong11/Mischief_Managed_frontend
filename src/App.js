import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavBar from './components/shared/Navbar'
import Map from './components/Map'
import Login from './components/Login'
import LoginOrg from './components/login_signup/LoginOrg'
import HomePage from './components/home_page/HomePage'
import OrgDashboard from './components/organizers/OrgDashboard'

import './App.css';
import UserProfile from './components/UserProfile'
import AuthenticateRoute from './components/helpers/AuthenticateRoute'
import UnauthenticatedRoute from './components/helpers/UnAuthenticateRoute'
import UnauthenticatedRouteOrg from './components/helpers/UnAuthenticateRouteOrg'

import { userVerify } from './actions/authUsers'
import { orgVerify } from './actions/authOrgs'
import EventPage from './components/events_page/EventPage'
import SingleEventPage from './components/events_page/SingleEvent'
import { getCurrentLocation } from './actions/getCurrentLocation'
import SignupFormOrg from './components/login_signup/SignupFormOrg';
import SignupUser from './components/login_signup/SignupUser'


class App extends Component {
  componentDidMount = () => {
    // this.props.orgVerify()
    // this.props.userVerify()
    this.props.getCurrentLocation()
  }

  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="main-page">
          <Switch>
            <Route exact path="/events/map" component={Map} />
            <Route exact path='/home' component={HomePage} />
            <Router exact path='/organizers/landing' component={OrgDashboard} />
            <UnauthenticatedRoute exact path="/login/users" isLoggedIn={this.props.isLoggedIn} component={Login} />
            <UnauthenticatedRoute exact path="/signup/users" isLoggedIn={this.props.isLoggedIn} component={SignupUser} />

            <UnauthenticatedRouteOrg exact path='/login/organizers' isLoggedIn={this.props.isOrgLoggedIn} component={LoginOrg} />
            <UnauthenticatedRouteOrg exact path='/signup/organizers' isLoggedIn={this.props.isOrgLoggedIn} component={SignupFormOrg} />

            <Route exact path="/users/events" component={EventPage} />
            <Route exact path="/events/:eventTitle" component={SingleEventPage} />
            <AuthenticateRoute exact path='/users/events' isLoggedIn={this.props.isLoggedIn} component={EventPage} />
            <AuthenticateRoute exact path="/profiles" isLoggedIn={this.props.isLoggedIn} component={UserProfile} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
}
const mapStateToProps = ({ auth, authOrg, location }) => {
  return {
    isLoading: auth.isLoading,
    isOrgLoading: authOrg.isLoading,
    isOrgLoggedIn: authOrg.isLoggedIn,
    isLoggedIn: auth.isLoggedIn,
    location: location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userVerify, orgVerify, getCurrentLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

