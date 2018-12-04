import React, { Component } from 'react'
import {
  Button,
  Row,
  Input,
  Card
} from 'react-materialize'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { orgSignup } from '../../actions/authOrgs'
import '../../styles/login.css'
import { withRouter } from 'react-router-dom'

class SignupFormOrg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      aboutus: '',
      email: '',
      password: '',
      street_org: '',
      city_org: '',
      state_org: '',
      zip_org: '',
      logo: '',
      lat_org: '',
      long_org: ''
    }
  }

  submitSignup = e => {
    e.preventDefault()
    this.props.orgSignup(this.state, this.props.history)
    this.setState({
      name: '',
      aboutus: '',
      email: '',
      password: '',
      street_org: '',
      city_org: '',
      state_org: '',
      zip_org: '',
      logo: '',
      lat_org: '',
      long_org: ''
    })
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  showButton = () => {
    if (this.state.name &&
      this.state.email &&
      this.state.aboutus &&
      this.state.password &&
      this.state.street_org &&
      this.state.city_org &&
      this.state.state_org &&
      this.state.zip_org &&
      this.state.logo &&
      this.state.lat_org &&
      this.state.long_org) {
      return (
        <Button size="lg" block className="mr-3" type="submit" color="primary" onClick={this.submitSignup}>Sign Up </Button >)
    }
    return (<Button size="lg" block className="mr-3" type="submit" color="primary" disabled> Sign Up</Button >)
  }

  render() {
    return (
      <Card className='main-wrapper'>
        <form onSubmit={this.submitSignup}>
          <Row>
            <Input
              name='name' label='NAME'
              id='name-field'
              placeholder='name'
              value={this.state.name}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='email' label='EMAIL'
              type='email'
              id='email-field'
              placeholder='email'
              value={this.state.email}
              onChange={this.onChange}
            />
            <Input
              type="password" label='PASSWORD'
              name="password"
              id="pass-field"
              placeholder="password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              type='textarea' label='DESCRIPTION'
              name='aboutus'
              id="aboutus-field"
              placeholder="aboutus"
              value={this.state.aboutus}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='street_org' label='STREET'
              id='street_org-field'
              placeholder='street'
              value={this.state.street_org}
              onChange={this.onChange}
            />
            <Input
              name="city_org" label='CITY'
              id="city_org-field"
              placeholder="city"
              value={this.state.city_org}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='state_org' label='STATE'
              id='state_org-field'
              placeholder='state'
              value={this.state.state_org}
              onChange={this.onChange}
            />
            <Input
              name="zip_org" label='ZIPCODE'
              id="zip_org-field"
              placeholder="zip"
              value={this.state.zip_org}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input name='logo' label='LOGO'
              id='logo-field'
              placeholder='logo'
              value={this.state.logo}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='lat_org'
              label='LATITUDE'
              id='lat_org-field'
              placeholder='lat'
              value={this.state.lat_org}
              onChange={this.onChange}
            />
            <Input
              name="long_org"
              label='LONGITUDE'
              id="long_org-field"
              placeholder="long"
              value={this.state.long_org}
              onChange={this.onChange}
            />
          </Row>
          {
            this.props.SignupError ? (
              <p color="danger" className="text-center font-weight-bold">
                Have you already registered? Or, make sure all fields are correct.
              </p>
            ) : null
          }
          {this.showButton()}
        </form>
      </Card>
    )
  }
}

const mapStateToProps = ({ authOrg }) => {
  return {
    SignupError: authOrg.SignupError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    orgSignup: bindActionCreators(orgSignup, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignupFormOrg))
