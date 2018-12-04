import React, { Component } from 'react'
import {
  Row,
  Col,
  Card
} from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/authUsers'
import '../styles/login.css'
import LoginForm from './login_signup/LoginForm'
import { Link } from 'react-router-dom'


class Login extends Component {
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


  render() {
    return (
      <Card className="main-wrapper">
        <Row className="mx-0">
          <Col>
            <LoginForm />
          </Col>
        </Row >
        <Link to='/login/organizers'>I am an organizer</Link>
      </Card >
    )
  }
}

function mapStateToProps(state) {
  return {
    LoginError: state.auth.LoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)




