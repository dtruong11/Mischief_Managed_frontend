import React, { Component } from 'react';
import { Row, Input, Card, Col, Button } from 'react-materialize'
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react'
import { Icon } from 'react-icons-kit'
import '../../styles/createEventOrg.css'
var moment = require('moment')



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
    console.log(this.state)

    const start_date_iso = moment(moment(this.state.start_date, 'YYYY/MM/DD HH:mm')).toISOString()
    const end_date_iso = moment(moment(this.state.end_date, 'YYYY/MM/DD HH:mm')).toISOString()


    const check_start = moment(start_date_iso).format('YYYY/MM/DD HH:mm')
    console.log('start_date_iso', start_date_iso)
    console.log(check_start)
    console.log('end_date_iso', end_date_iso)

    // backend call 
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
      // this.props.changedDate(value)
    }
  }

  handleCheckbox = (e) => {
    console.log('THIS IS HANDLECHECKBOX')
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

export default EventForm 