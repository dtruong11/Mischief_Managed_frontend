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
import { withRouter } from 'react-router-dom'
import { orgVerify } from '../../actions/authOrgs'


class LoginOrg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  // submitLogin = async e => {
  //   e.preventDefault()
  //   // await this.props.orgLogin(this.state, this.props.history)
  //   // this.setState({
  //   //   email: '',
  //   //   password: ''
  //   // })
  //   // await this.props.orgVerify()
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
  return bindActionCreators({ orgLogin, orgVerify }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginOrg))




