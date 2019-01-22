import React, { Component } from 'react'
import { Row, Card, CardTitle, Modal, Col } from 'react-materialize'
import { eventTime } from '../events_page/EventCard'
import { Icon } from 'react-icons-kit'
import { location } from 'react-icons-kit/entypo/location'
import { smileO } from 'react-icons-kit/fa/smileO'
import { androidHand } from 'react-icons-kit/ionicons/androidHand'
import OrgEventModal from './OrgEventModal'
import '../../styles/orgEventCard.css'


const EventCard = (props) => {
  const { id, title, description, image_url, street, city, state, zip, min_age, max_age, start_date, end_date } = props.event
  return (
    /// FIX THIS with div background image, height, background_size: cover
    <Row className='wrapping_row'>
      <Card className='event_card'>
        <Col s={12} m={6} l={5}>
          <div className='event_img' style={{ backgroundImage: `url('${image_url}')`, height: '240px' }}></div>
        </Col>
        <Col s={12} m={6} l={3}>
          <div>{eventTime(start_date, end_date)}</div>
          <div><Icon className='event_card_icon' size={17} icon={androidHand} />{`For ${min_age} to ${max_age} years old`}</div>
        </Col>
        <Col s={12} m={6} l={3}>
          <Row>
            <div className='event_title'>{title} </div>
          </Row>
          <Row>
            <div><Icon className='event_card_icon' size={17} icon={location} />{`${street}, ${city}, ${state}, ${zip}`}</div>
          </Row>
          <Row>
            <div><Icon className='event_card_icon' size={17} icon={smileO} />{description}</div>
          </Row>
        </Col>
        <Col l={1}>
          <OrgEventModal event={props.event} />
        </Col>
      </Card>
    </Row>
  )
}

export default EventCard
