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
import { orgLogin } from '../../actions/authOrgs'
import '../../styles/login.css'
import LoginFormOrg from './LoginFormOrg'

class LoginOrg extends Component {
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
    this.props.orgLogin(this.state, this.props.history)
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
    return (
      <Card className="main-wrapper">
        <Row>
          <div className='form-title'>Welcome Organization</div>
        </Row>
        <Row className="mx-0">
          <Col>
            <Row>
              <Col>
              </Col>
              {/* <Col onClick={this.handleLoginView}>
                <h5 className="text-center text-danger" className={this.state.loginview && 'login_signup'}> 
                <a href='/login/organizers'> Log In  </a>
                 </h5>
              </Col>
              <Col onClick={this.handleSignupView}>
                <h5 className="text-center text-danger" className={!this.state.loginview ? 'login_signup' : ''}> 
                <a href='/signup/organizers'> Sign Up  </a>
                </h5>
              </Col> */}
              <Col>
              </Col>
            </Row>
            <LoginFormOrg /> 
          </Col>
        </Row>
        <a href='/signup/organizers'>Not logged in? Sign up</a>
      </Card>
    )
  }
}

function mapStateToProps({ authOrg }) {
  return {
    LoginError: authOrg.LoginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    orgLogin: bindActionCreators(orgLogin, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOrg)




