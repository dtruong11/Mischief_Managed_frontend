import React, { Component } from 'react';
import { Row, Input, Card, Button } from 'react-materialize'
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from 'semantic-ui-calendar-react'
import { Icon } from 'react-icons-kit'
import '../../styles/createEventOrg.css'

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
      art: '',
      sport: '',
      nature: '',
      music: '',
      educational: '',
      dateTime: '',
      // start_date: '',
      // start_time: '',
      // end_time: '',
      // end_date: '',
      cancelled_at: null,
      org_id: localStorage.getItem('org_id')
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state)
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
      art: '',
      sport: '',
      nature: '',
      music: '',
      educational: '',
      dateTime: ''
      // start_date: '',
      // end_date: '',
      // start_time: '',
      // end_time: ''
    })
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
    console.log(this.state.date)
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
      // this.props.changedDate(value)
    }
  }

  render() {
    return (
      <Card className='main_wrapper'>
        <form >
          <Row>
            <Input name='title' label='TITLE' value={this.state.title} onChange={this.onChange} />
            <Input name='cost' label='PRICE' value={this.state.cost} onChange={this.onChange} />
          </Row>
          <Row>
            <Input type='textarea' name='description' label='DESCRIPTION' value={this.state.description} onChange={this.onChange} />
          </Row>
          <Row>
            <p>From </p>
            <Input name='min_age' label='MINIMUM AGE' value={this.state.min_age} onChange={this.onChange} />
            <p>to</p>
            <Input name='max_age' label='MAXIMUM AGE' value={this.state.max_age} onChange={this.onChange} />
            <p>years</p>
          </Row>
          <Row>
            <Input name='image_url' label='IMAGE LINK' value={this.state.image_url} onChange={this.onChange} />
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
          <Row>
            <Input name='sport' type='checkbox' value={this.state.sport} label='SPORT' onChange={this.onChange}
            />
            <Input name='nature' type='checkbox' value={this.state.nature} label='NATURE' onChange={this.onChange}
            />
            <Input name='music' type='checkbox' value={this.state.music} label='MUSIC' onChange={this.onChange}
            />
            <Input name='educational' type='checkbox' value={this.state.educational} label='EDUCATIONAL' />
            <Input name='art' type='checkbox' value={this.state.art} label='ART' />
          </Row>
          <Row>
            <DateTimeInput
              name="dateTime"
              placeholder="Date Time"
              value={this.state.dateTime}
              popupPosition="bottom right"
              onChange={this.handleChange} />
          </Row>
        </form>
      </Card>
    )

  }
}

export default EventForm 