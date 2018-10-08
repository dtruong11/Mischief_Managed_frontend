import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
  Input
} from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { orgLogin } from '../../actions/authOrgs'
import '../../styles/login.css'
import { withRouter } from 'react-router-dom'


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
    this.props.orgLogin(this.state, this.props.history)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitLogin(e)}>
        <Row className='form-title'>
          <div className='form-title'>Welcome Organization</div>
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
        </Row>
        <Row>
          <Input
            type="password"
            name="password"
            id="pass-field"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </Row>
        {this.props.LoginError ? (
          <p style={{ color: '#cc0000', marginBottom: '7px' }} className="text-center font-weight-bold">
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


const mapStateToProps = ({ authOrg }) => {
  return {
    LoginError: authOrg.LoginError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orgLogin: bindActionCreators(orgLogin, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))