import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogin } from '../actions/authUsers'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  submitLogin = e => {
    e.preventDefault()
    console.log('history', this.props);
    this.props.userLogin(this.state, this.props.history)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: "20vh" }} className="mx-0">
          <Col
            md={{ size: 5, offset: 3 }}
            style={{}}
          >
            <Form onSubmit={this.submitLogin}>
              <h2 className="text-center text-danger" className="text-center font-weight-bold"> Log In</h2>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="pass-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              {this.props.LoginError ? (
                <p color="danger" className="text-center font-weight-bold">
                  Invalid email address or password
                  </p>
              ) : null}
              <Button size="lg" block className="mr-3" type="submit" color="primary">
                Log In
              </Button >
              <p className="text-center">OR</p>
              <Button size="lg" block className="mr-3" type="submit" color="primary">
                <a href="/signup" style={{ textDecoration: 'none' }}>SIGN UP</a>
              </Button >
            </Form>
          </Col>
        </Row>

      </Container>
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




