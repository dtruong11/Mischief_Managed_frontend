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
  // const start = moment(startT)
  const end = moment(endT)
  if (end.isSame(moment(), 'day')) return 'today'
  if (end.isBefore(moment())) return 'past'
  return 'future'
  // return start.isBefore(end)
}

class EventForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      long: '',
      lat: '',
      sport: false,
      art: false,
      educational: false,
      nature: false,
      music: false,
      start_date: '',
      end_date: '',
      cancelled_at: null,
      org_id: localStorage.getItem('org_id')
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const start_date = parseTime(this.state.start_date, true)
    const end_date = parseTime(this.state.end_date, true)
    const formInputs = { ...this.state, start_date, end_date }

    // backend call to create event 
    this.props.createEvent(formInputs)

    this.setState({
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
      long: '',
      lat: '',
      sport: false,
      art: false,
      educational: false,
      nature: false,
      music: false,
      start_date: '',
      end_date: '',
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
      [name]: !JSON.parse(value)
    })
    console.log(JSON.stringify(this.state.sport))
  }

  render() {
    return (
      <Card className='main_wrapper'>
        <form onSubmit={this.onSubmit}>
          <Row>
            <h5>Create your event</h5>
          </Row>
          <Row>
            <Input name='title' label='TITLE' value={this.state.title} onChange={this.onChange} />
            <Input name='cost' label='PRICE' value={this.state.cost} onChange={this.onChange} />
          </Row>
          <Row>
            <Input type='textarea' name='description' label='DESCRIPTION' value={this.state.description} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='min_age' label='MINIMUM AGE' value={this.state.min_age} onChange={this.onChange} />
            <Input name='max_age' label='MAXIMUM AGE' value={this.state.max_age} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='image_url' label='IMAGE LINK' value={this.state.image_url} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='street' label='STREET' id='street-field' placeholder='street' value={this.state.street} onChange={this.onChange} />
            <Input name="city" label='CITY' id="city-field" placeholder="city" value={this.state.city} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='state' label='STATE' id='state-field' placeholder='state' value={this.state.state} onChange={this.onChange} />
            <Input name="zip" label='ZIPCODE' id="zip-field" placeholder="zip" value={this.state.zip} onChange={this.onChange} />
          </Row>
          <Row>
            <Input name='lat' label='LATITUDE' id='lat-field' placeholder='lat' value={this.state.lat} onChange={this.onChange} />
            <Input name="long" label='LONGITUDE' id="long-field" placeholder="long" value={this.state.long} onChange={this.onChange} />
          </Row>
          <Row>
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="sport" type="checkbox" value={JSON.stringify(this.state.sport)} label='Sport' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="art" type="checkbox" value={JSON.stringify(this.state.art)} label='Arts and Craft' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="educational" type="checkbox" value={JSON.stringify(this.state.educational)} label='Educational' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="nature" type="checkbox" value={JSON.stringify(this.state.nature)} label='Nature' />
            <Input onChange={(event) => { this.handleCheckbox(event) }} name="music" type="checkbox" value={JSON.stringify(this.state.music)} label='Music' />
          </Row>
          <Row>
            <Col>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ createEvent }, dispatch)
export default connect(null, mapDispatchToProps)(EventForm) 