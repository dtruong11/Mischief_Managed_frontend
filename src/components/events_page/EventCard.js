import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { heart } from 'react-icons-kit/fa/heart'
import { heartO } from 'react-icons-kit/fa/heartO'


import { connect } from 'react-redux'
import { Row, Col, Card } from 'react-materialize'
import { bindActionCreators } from 'redux'
import { createFavoriteEvent, unLikeEvent } from '../../actions/events'
import '../../styles/eventPage.css'
import moment from 'moment'


class EventCard extends Component {
  constructor(props) {
    super(props)
  }

  favoriteEvent = (userId, eventId) => {
    return createFavoriteEvent(userId, eventId)
  }

  unLike = (userId, eventId) => {
    return unLikeEvent(userId, eventId)
  }

  render() {
    const { id, title, registered, image_url, min_age, max_age, street, city, state, event_description, favorite, zip, start_date, end_date } = this.props.event
    console.log('event id inside EventCard', id)

    return (
      <Row style={{ marginTop: '15px' }}>
        <Card onClick={() => this.props.onClick(id)}>
          <Col l={4}>
            <img className='event_card_img' src={image_url} alt="event_image" ></img>
          </Col>
          <Col l={4}>
            <div>{eventTime(start_date, end_date)}</div>
          </Col>
          <Col l={3}>
            <div className='event_title'>{title} </div>
            <div>{`${street}, ${city}, ${state}, ${zip}`}</div>
            <div>{`From ${min_age} to ${max_age}`}</div>
            <div>{event_description}</div>
          </Col>
          <Col l={1}>
            {
              favorite ? <Icon icon={heart} /> : <Icon icon={heartO} />
            }
          </Col>
        </Card>
      </Row>
    )
  }
}

export const eventTime = (start_date, end_date) => {
  const startTime = moment(start_date).format('HH:mm a')
  const endTime = moment(end_date).format('HH:mm a')
  const startDay = moment(start_date).format('ddd, MMM D')
  const endDay = moment(end_date).format('ddd, MMM D')

  const newStartDate = (moment(start_date).format("ddd, MMM D HH:mm a"))
  const newEndDate = (moment(end_date).format("ddd, MMM D HH:mm a"))
  const timeRange = `${newStartDate} - ${newEndDate}`

  let range
  if (startDay === endDay) {
    range = `${startDay}, ${startTime.slice(0, -2)} - ${endTime} `
  } else {
    range = timeRange
  }
  return range
}




const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ createFavoriteEvent }, dispatch)
}

export default connect(null, mapDispatchToProps)(EventCard) 