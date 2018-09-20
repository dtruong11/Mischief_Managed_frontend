import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavBar from './components/shared/Navbar'
import Map from './components/Map'
import './App.css';


class App extends Component {
  // componentDidMount() getUser()


  render() {
    return (
      <Router>
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
            </Switch>
          </div>
          {/* <Modal
            id='foo'
            header='Modal Header'>
            Lorem ipsum dolor sit amet
          </Modal> */}
        </div>
      </Router>

    );
  }
}

export default App;
