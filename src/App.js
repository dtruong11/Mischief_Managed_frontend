import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavBar from './components/shared/Navbar'
import Map from './components/Map'
import Login from './components/Login'
import './App.css';
import UserProfile from './components/UserProfile'
import AuthenticateRoute from './components/helpers/AuthenticateRoute'
import UnauthenticatedRoute from './components/helpers/UnAuthenticateRoute'
import { userVerify } from './actions/authUsers'
import EventPage from './components/events_page/EventPage'
import SingleEventPage from './components/events_page/SingleEvent'
import { getCurrentLocation } from './actions/getCurrentLocation'


class App extends Component {
  componentDidMount = () => {
    console.log('in app.js', this.props)
    // window.location.href
    this.props.userVerify()
    this.props.getCurrentLocation()
  }

  render() {
    // console.log('APP', this.props)
    return (<Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="main-page">
          {
            this.props.isLoading ?
              <div></div>
              :
              <Switch>
                <Route exact path="/events/map" component={Map} />
                <UnauthenticatedRoute exact path="/login/users" isUser={true} isLoggedIn={this.props.isLoggedIn} component={Login} />
                <UnauthenticatedRoute exact path='/login/organizers' isUser={false} component={Login} />
                <Route exact path="/users/events" component={EventPage} />
                <Route exact path="/events/:eventTitle" component={SingleEventPage} />
                <AuthenticateRoute exact path='/users/events' isLoggedIn={this.props.isLoggedIn} component={EventPage} />
                <AuthenticateRoute exact path="/profiles" isLoggedIn={this.props.isLoggedIn} component={UserProfile} />
                <Redirect to="/login/users" />
              </Switch>
          }
        </div>

      </div>
    </Router>

    );
  }
}
const mapStateToProps = ({ auth, location }) => {
  return {
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn,
    location: location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userVerify, getCurrentLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

