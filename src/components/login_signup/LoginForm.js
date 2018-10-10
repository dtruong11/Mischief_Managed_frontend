import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
  Input
} from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../../actions/authUsers'
import '../../styles/login.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  submitLogin = e => {
    e.preventDefault()
    this.props.userLogin(this.state, this.props.history)
    this.setState({
      email: '',
      password: ''
    })
  }

  fillLogin = (value) => {
    if (!value) {
      return `student@galvanize.com`
    } else {
      return value
    }
  }

  render() {
    return (
      <form onSubmit={this.submitLogin}>
        <Row className='form-title'>
          <p>Welcome Family & Friends</p>
        </Row>
        <Row>
          <Input
            type="email"
            name="email"
            id="email-field"
            placeholder="email"
            value={
              !this.state.email ? `student@galvanize.com` : this.state.email
            }
            onChange={e => this.setState({ email: e.target.value })}
          />
        </Row>
        <Row>
          <Input
            type="password"
            name="password"
            id="pass-field"
            placeholder="password"
            value={
              !this.state.password ? `password` : this.state.password
            }
            onChange={e => this.setState({ password: e.target.value })}
          />
        </Row>
        {this.props.LoginError ? (
          <p color="danger" className="text-center font-weight-bold">
            Invalid email address or password
        </p>
        ) : null}
        <Button className="mr-3" type="submit">
          Log In
        </Button >
      </form>
    )
  }
}


const mapStateToProps = ({ auth }) => {
  return {
    LoginError: auth.LoginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)