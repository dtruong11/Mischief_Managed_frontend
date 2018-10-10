import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Input, Card, Col, Button } from 'react-materialize'
import {
  DateTimeInput
} from 'semantic-ui-calendar-react'
import { Icon } from 'react-icons-kit'
import '../../styles/createEventOrg.css'
import { createEvent } from '../../actions/eventsByOrg'
var moment = require('moment')

////////////////////////////////////
// HELPER FUNCTIONS: MOMENTJS TIME 
////////////////////////////////////
export const parseTime = (datetime, parseiso = true) => {
  if (parseiso) {
    const iso_time = moment(moment(datetime, 'YYYY/MM/DD HH:mm')).toISOString()
    return iso_time
  } else {
    const timeFormat = moment(datetime).format('YYYY/MM/DD HH:mm')
    return timeFormat
  }
}

// check if start time is in the past, today, or future 
export const checkBefore = (endT) => {
  const end = moment(endT)
  if (end.isSame(moment(), 'day')) return 'today'
  if (end.isBefore(moment())) return 'past'
  return 'future'
}

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fill_location: false,
      select_logo: false,

      title: 'Painting with Our Hands',
      description: 'We will use watercolor to paint stars and rainbows with our hands',
      image_url: 'https://cdn2.momjunction.com/wp-content/uploads/2015/12/21-Creative-Yet-Easy-Finger-And-Thumb-Painting-Ideas-For-Kids.jpg',
      cost: '0',
      min_age: '2',
      max_age: '5',
      street: '575 Bellevue Way NE #310',
      city: 'Bellevue',
      state: 'WA',
      zip: '98040',
      long: -122.203725,
      lat: 47.615779,
      sport: false,
      art: true,
      educational: false,
      nature: false,
      music: false,
      start_date: '',
      end_date: '',
      cancelled_at: null,
      org_id: localStorage.getItem('org_id')
    }
  }

  onSubmit = async (e, org) => {
    e.preventDefault()
    const start_date = parseTime(this.state.start_date, true)
    const end_date = parseTime(this.state.end_date, true)
    const formInputs = { ...this.state, start_date, end_date }


    delete formInputs.fill_location
    delete formInputs.select_logo

    console.log('this.state inside onsubmit', this.state)
    console.log('this is formInputs', formInputs)

    // backend call to create event 
    this.props.createEvent(formInputs) // ENABLE BACK SOON!!! 

    // console.log('this.state BEFORE RESETTING', this.state)

    this.setState({
      fill_location: false,
      select_logo: false,

      title: '',
      description: '',
      image_url: '',
      cost: '',
      min_age: '',
      max_age: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      long: 0,
      lat: 0,
      sport: false,
      art: false,
      educational: false,
      nature: false,
      music: false,
      start_date: '',
      end_date: ''
    })
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleCheckbox = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
    console.log('name', name)
    console.log('value', value)
  }

  fillLocation = () => {
    const { street_org, city_org, state_org, zip_org, lat_org, long_org, logo } = this.props.org
    if (this.state.fill_location) {
      this.setState({
        fill_location: false,
        title: '',
        description: '',
        cost: '',
        min_age: '',
        max_age: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        long: 0,
        lat: 0,
        sport: false,
        art: false,
        educational: false,
        nature: false,
        music: false,
        start_date: '',
        end_date: ''
      })
    } else {
      this.setState({
        fill_location: true,
        street: street_org,
        city: city_org,
        state: state_org,
        zip: zip_org,
        lat: lat_org,
        long: long_org
      })
    }
  }

  fillImg = () => {
    const { logo } = this.props.org

    if (this.state.select_logo) {
      this.setState({
        select_logo: false,
        image_url: '',
        sport: false,
        art: false,
        educational: false,
        nature: false,
        music: false,
        start_date: '',
        end_date: ''
      })
    } else {
      this.setState({
        select_logo: true,
        image_url: logo
      })
    }
  }

  render() {
    console.log('this is the STATE AFTER RESETTING', this.state)

    const { street_org, city_org, state_org, zip_org, lat_org, long_org, logo } = this.props.org
    return (
      <Card className='main_wrapper'>
        <form onSubmit={(e) => this.onSubmit(e, this.props.org)}>
          <Row>
            <h5>Create your event</h5>
          </Row>
          <Row>
            <Input name='title' label='TITLE' id='title_field' placeholder='title' value={this.state.title} onChange={this.onChange} validate />
            <Input name='cost' label='PRICE' id='cost_field' placeholder='0' value={this.state.cost} onChange={this.onChange} validate />
          </Row>
          <Row>
            <Input type='textarea' placeholder='what is the event about?' name='description' label='DESCRIPTION' value={this.state.description} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='min_age' placeholder='0' label='MINIMUM AGE' value={this.state.min_age} onChange={this.onChange} />
            <Input name='max_age' placeholder='13' label='MAXIMUM AGE' value={this.state.max_age} onChange={this.onChange} />
          </Row>
          <Row>
            <Input onChange={(event) => { this.fillImg(event) }} name='select_logo' type='checkbox' value={this.state.select_logo} label='Use my logo as the image for this event' />
          </Row>
          <Row>
            <Input name='image_url' placeholder='https://' label='IMAGE LINK'
              value={this.state.select_logo ? logo : this.state.image_url}
              onChange={(e) => this.onChange(e)} />
          </Row>
          <Row>
            <Input onChange={(event) => { this.fillLocation(event) }} name='fill_location' type="checkbox" value={this.state.fill_location} label='The event is at my location' />
          </Row>
          <Row>
            <Input name='street' label='STREET' id='street-field' placeholder='street'
              value={this.state.fill_location ? street_org : this.state.street}
              onChange={this.onChange} />
            <Input name="city" label='CITY' id="city-field" placeholder="city"
              value={this.state.fill_location ? city_org : this.state.city}
              onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='state' label='STATE' id='state-field' placeholder='state'
              value={this.state.fill_location ? state_org : this.state.state}
              onChange={this.onChange} />
            <Input name="zip" label='ZIPCODE' id="zip-field" placeholder="zip"
              value={this.state.fill_location ? zip_org : this.state.zip}
              onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='lat' label='LATITUDE' id='lat-field' placeholder='lat'
              value={this.state.fill_location ? JSON.stringify(lat_org) : this.state.lat}
              onChange={this.onChange} />
            <Input name="long" label='LONGITUDE' id="long-field" placeholder="long"
              value={this.state.fill_location ? JSON.stringify(long_org) : this.state.long}
              onChange={this.onChange} />
          </Row>
          <Row>
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="sport" type="checkbox" value={this.state.sport} label='Sport' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="art" type="checkbox" value={this.state.art} label='Arts and Craft' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="educational" type="checkbox" value={this.state.educational} label='Educational' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="nature" type="checkbox" value={this.state.nature} label='Nature' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="music" type="checkbox" value={this.state.music} label='Music' />
          </Row>
          <Row>
            <Col className='date_time'>
              <DateTimeInput
                name="start_date"
                placeholder="Start Date"
                value={this.state.start_date}
                popupPosition="bottom right"
                onChange={this.handleChange}
                dateFormat={`YYYY/MM/DD`}
                minDate={moment()}
              />
            </Col>
            <Col>
              <DateTimeInput
                name="end_date"
                placeholder="End Date"
                value={this.state.end_date}
                popupPosition="bottom right"
                onChange={this.handleChange}
                dateFormat={`YYYY/MM/DD`}
                minDate={moment()}
              />
            </Col>
          </Row>
          <Row className='button_submit'>
            <Button type='submit' className='submit_btn'>Create Event</Button>
          </Row>
        </form>
      </Card>
    )
  }
}

const mapStateToProps = ({ authOrg }) => ({ org: authOrg.org })
const mapDispatchToProps = (dispatch) => bindActionCreators({ createEvent }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventForm) 