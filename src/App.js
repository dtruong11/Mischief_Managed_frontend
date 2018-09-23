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
import { userVerify } from './actions/authUsers'


class App extends Component {

  componentDidMount() {
    console.log("this.props inside app", this.props)
    this.props.userVerify(this.props.history)
  }

  render() {
    return (<Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <div className="main-page">
          <Switch>
            {/* <Route exact path="/" render={() => (
                <Redirect to="/home" />
              )} /> */}
            {/* <Route exact path="/home" component={Home} /> */}
            {/* <Route exact path="/events" component={Events} /> */}
            <Route exact path="/events/map" component={Map} />
            <Route exact path="/login/users" component={Login} />
            <AuthenticateRoute exact path="/profiles" isLoggedIn={this.props.isLoggedIn} component={UserProfile} />

            <Redirect to="/login/users" />
          </Switch>
        </div>

      </div>
    </Router>

    );


  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userVerify: bindActionCreators(userVerify, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

