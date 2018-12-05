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
import { Link } from 'react-router-dom'

class LoginOrg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Card className="main-wrapper">
        <Row className="mx-0">
          <Col>
            <LoginFormOrg />
          </Col>
        </Row>
        <Link to='/signup/organizers'>Not logged in? Sign up</Link>
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




