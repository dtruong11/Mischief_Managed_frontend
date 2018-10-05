import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
  Input,
  Card,
  CardTitle
} from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/authUsers'
import '../styles/login.css'
import LoginForm from './login_signup/LoginForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loginview: true
    }
  }

  submitLogin = e => {
    e.preventDefault()
    // console.log('history', this.props);
    this.props.userLogin(this.state, this.props.history)
    this.setState({
      email: '',
      password: ''
    })
  }

  handleLoginView = () => {
    this.setState({ loginview: true })
  }

  handleSignupView = () => {
    this.setState({ loginview: false })
  }

  render() {
    console.log('this.props inside Login.js', this.props.isUser)
    return (
      <Card className="main-wrapper">
        <Row>
          {this.props.isUser ? <p>Welcome Family & Friends</p> : <div>Welcome Organization</div>}
        </Row>
        <Row style={{ marginTop: "20vh" }} className="mx-0">
          <Col>
            <Row>
              <Col>
              </Col>
              <Col onClick={this.handleLoginView}>
                <h5 className="text-center text-danger" className={this.state.loginview && 'login_signup'}> Log In </h5>
              </Col>
              <Col onClick={this.handleSignupView}>
                <h5 className="text-center text-danger" className={!this.state.loginview && 'login_signup'}> Sign Up</h5>
              </Col>
              <Col>
              </Col>
            </Row>
            {
              this.state.loginview ? <LoginForm /> : <div>Hello signup</div>
            }
          </Col>
        </Row>
        {
          this.props.isUser ? <a href='/login/organizers'>I am an organizer</a> : <a href='/login/users'>I am an avid user</a>
        }

      </Card>
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




