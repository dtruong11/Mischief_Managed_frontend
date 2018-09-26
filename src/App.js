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


class App extends Component {

  componentDidMount = () => {
    this.props.userVerify()

    //// run action to get current lat/long => store in redux; create an action GET_CURRENT_LOCATION 
    // navigator.geolocation.getCurrentPosition(function(location) {
    //   console.log('my current lat',location.coords.latitude);
    //   console.log('my current long',location.coords.longitude);
    //   console.log('accuracy rate',location.coords.accuracy);
    // });
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
                <UnauthenticatedRoute exact path="/login/users" isLoggedIn={this.props.isLoggedIn} component={Login} />
                {/* <Route exact path="/login/users" render={() => {
                  if (this.props.isLoggedIn) return <Redirect to="/profiles" />
                  return <Login />
                }} /> */}
                <Route exact path="/users/events" component={EventPage} />
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
function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    isLoggedIn: state.auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userVerify }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

