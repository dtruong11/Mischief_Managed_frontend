import React, { Component } from 'react'
import {
  Button,
  Row,
  Input,
  Card
} from 'react-materialize'
import '../../styles/login.css'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../actions/authUsers'

class SignupUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      city: '',
      state: '',
      zip: '',
      avatar: ''
    }
  }

  submitSignup = (e) => {
    e.preventDefault()
    console.log('the props', this.props.history)
    this.props.userSignup({ ...this.state, zip: parseInt(this.state.zip) }, this.props.history)
    this.setState({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      city: '',
      state: '',
      zip: '',
      avatar: ''
    })
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  showButton = () => {
    if (this.state.first_name &&
      this.state.email &&
      this.state.last_name &&
      this.state.password &&
      this.state.city &&
      this.state.state &&
      this.state.zip) {
      return (
        <Button size="lg" block className="mr-3" type="submit" color="primary" onClick={this.submitSignup}>Sign Up </Button >)
    }
    return (<Button size="lg" block className="mr-3" type="submit" color="primary" disabled> Sign Up</Button >)
  }

  render() {
    return (
      <Card className='main-wrapper'>
        <form>
          <Row className='form-title'>
            <p>Welcome Family & Friends</p>
          </Row>
          <Row>
            <Input
              name="first_name"
              id="first_name_field"
              placeholder="first name"
              value={this.state.first_name}
              onChange={e => this.setState({ first_name: e.target.value })}
            />
            <Input
              name="last_name"
              id="last_name_field"
              placeholder="last name"
              value={this.state.last_name}
              onChange={e => this.setState({ last_name: e.target.value })}
            />
          </Row>
          <Row>
            <Input
              type="email"
              name="email"
              id="email-field"
              placeholder="email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Input
              type="password"
              name="password"
              id="pass-field"
              placeholder="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Row>
          <Row>
            <Input
              name="city"
              id="city-field"
              placeholder="city"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />
            <Input
              name="state"
              id="state-field"
              placeholder="state"
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
            />
            <Input
              name="zip"
              id="zip-field"
              placeholder="zip"
              value={this.state.zip}
              onChange={e => this.setState({ zip: e.target.value })}
            />
          </Row>
          <Row>
            <Input
              name="avatar"
              id="avatar-field"
              placeholder="avatar"
              value={this.state.avatar}
              onChange={e => this.setState({ avatar: e.target.value })}
            />
          </Row>
          {
            this.props.SignupError ? (
              <p color="danger" className="text-center font-weight-bold">
                Have you already registered? Or, make sure all fields are correct.
              </p>
            ) : null
          }
          {this.showButton()}
        </form>
        <Link to='/login/organizers'>I am an organizer</Link>
      </Card>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    SignupError: auth.SignupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupUser))