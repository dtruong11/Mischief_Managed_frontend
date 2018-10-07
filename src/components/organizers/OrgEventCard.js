import React, { Component } from 'react'
import { Row, Card, CardTitle, Modal, Col } from 'react-materialize'
import { eventTime } from '../events_page/EventCard'
import { Icon } from 'react-icons-kit'
import { more_2 } from 'react-icons-kit/ikons/more_2'
import '../../styles/orgEventCard.css'


const EventCard = (props) => {
  console.log(props.event)
  const { id, title, description, image_url, street, city, state, zip, min_age, max_age, start_date, end_date } = props.event
  return (
    <div className='box effect'    >
      <Row>
        <Col>
          <Row><img className='event_pic' src={image_url} alt='event_pic' /></Row>
          <Row>{eventTime(start_date, end_date)}</Row>
          <Row>{`${street}, ${city}, ${state}, ${zip}`}</Row>
          <Row>{`From ${min_age} to ${max_age}`}</Row>
          <Row>
            <Modal id={`event_${id}`} trigger={<Icon icon={more_2} />}>
              <h4>{title}</h4>
              <p>{description}</p>
            </Modal>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default EventCard 