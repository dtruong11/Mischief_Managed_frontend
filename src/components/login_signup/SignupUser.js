import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
  Input,
  Card
} from 'react-materialize'

class SignupUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <Card>
        <form>
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
        </form>
      </Card>
    )
  }
}


export default SignupUser