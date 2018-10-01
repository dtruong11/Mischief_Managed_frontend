import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { eventTime } from './EventCard'
import { Icon } from 'react-icons-kit'
import { calendar } from 'react-icons-kit/feather/calendar'
import { dollarSign } from 'react-icons-kit/feather/dollarSign'
import { crosshair } from 'react-icons-kit/feather/crosshair'


class SingleEventTop extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, image_url, description, cost, street, city, state, zip, min_age, max_age, start_date, end_date, name, logo } = this.props.event
    return (
      <Row>
        <Col>
          <div className='info'>
            <p className='title'>{title}</p>
            <p className='detail'>Age {min_age} to {max_age}</p>
            <p className='detail'>Organized By {name}</p>
            <br />
            <p>{description}</p>
          </div>
        </Col>
        <Col>
          <img className='event_image' src={image_url} alt='event_image'></img>
        </Col>
        <Col>
          <div className='info_right'>
            <img className='logo' src={logo}></img>
            <br />
            <Icon size={25} icon={calendar} />  {eventTime(start_date, end_date)}
            <br />
            <br />
            <Icon size={25} icon={crosshair} />  {street}, {city}, {state}, {zip}
            <br />
            <br />
            <Icon size={25} icon={dollarSign} />  {cost}
            <br />
            <br />
            <Button className='register_btn' onClick={() => this.handleRegisterClick}>Register</Button>
          </div>
        </Col>
      </Row>
    )
  }
}

export default SingleEventTop