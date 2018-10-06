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


class SignupFormOrg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      logo: '',
      lat: '',
      long: ''
    }
  }

  submitSignup = e => {
    e.preventDefault()
    this.props.orgSignup(this.state, this.props.history)
    this.setState({
      name: '',
      description: '',
      email: '',
      password: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      logo: '',
      lat: '',
      long: ''
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
      this.state.description &&
      this.state.password &&
      this.state.street &&
      this.state.city &&
      this.state.state &&
      this.state.zip &&
      this.state.logo &&
      this.state.lat &&
      this.state.long) {
      return (
        <Button size="lg" block className="mr-3" type="submit" color="primary" onClick={this.submitSignup}>Sign Up </Button >)
    }
    return (<Button size="lg" block className="mr-3" type="submit" color="primary" disabled> Sign Up</Button >)
  }

  render() {
    console.log('this.state', this.state)
    return (
      <Card className='main-wrapper'>
        <form onSubmit={this.submitSignup}>
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
              name='name' label='NAME'
              id='name-field'
              placeholder='name'
              value={this.state.name}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              type='textarea' label='DESCRIPTION'
              name='description'
              id="description-field"
              placeholder="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='street' label='STREET'
              id='street-field'
              placeholder='street'
              value={this.state.street}
              onChange={this.onChange}
            />
            <Input
              name="city" label='CITY'
              id="city-field"
              placeholder="city"
              value={this.state.city}
              onChange={this.onChange}
            />
          </Row>
          <Row>
            <Input
              name='state' label='STATE'
              id='state-field'
              placeholder='state'
              value={this.state.state}
              onChange={this.onChange}
            />
            <Input
              name="zip" label='ZIPCODE'
              id="zip-field"
              placeholder="zip"
              value={this.state.zip}
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
              name='lat'
              label='LATITUDE'
              id='lat-field'
              placeholder='lat'
              value={this.state.lat}
              onChange={this.onChange}
            />
            <Input
              name="long"
              label='LONGITUDE'
              id="long-field"
              placeholder="long"
              value={this.state.long}
              onChange={this.onChange}
            />
          </Row>

          {
            this.props.SignupError ? (
              <p color="danger" className="text-center font-weight-bold">
                Make sure all fields are correct
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormOrg)



	// "name": "Seattle Children",
	// "description": "We have fun activities such as book reading and music time.",
	// "email": "seattle@children.com",
	// "password":"password",
	// "street": "4800 Sand Point Way NE",
	// "city": "Seattle",
	// "state": "WA",
	// "zip": "98105",
	// "logo": "https://www.underconsideration.com/brandnew/archives/seattle_childrens_detail.gif",
	// "lat": 47.662663,
	// "long": -122.280493