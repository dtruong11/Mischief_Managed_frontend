import React, { Component } from 'react'
import {
  Row,
  Col,
  Card
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
      password: ''
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

  // handleLoginView = () => {
  //   this.setState({ loginview: true })
  // }

  // handleSignupView = () => {
  //   this.setState({ loginview: false })
  // }

  render() {
    return (
      <Card className="main-wrapper">
        <Row className="mx-0">
          <Col>
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




