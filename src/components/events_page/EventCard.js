import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { heart } from 'react-icons-kit/fa/heart'
import { heartO } from 'react-icons-kit/fa/heartO'
import { androidHand } from 'react-icons-kit/ionicons/androidHand'
import { location } from 'react-icons-kit/entypo/location'
import { smileO } from 'react-icons-kit/fa/smileO'

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
    const { id, event_id, title, image_url, min_age, max_age, street, city, state, description, favorite, zip, start_date, end_date } = this.props.event
    console.log('event id inside EventCard', id)
    console.log('event description inside EventCard', this.props.event)

    return (
      <Row className='wrapping_row'>
        <Card className='event_card' onClick={() => this.props.onClick(event_id)}>
          <Col s={12} m={6} l={4}>
            <div className='event_card_img' style={{ background: `url('${image_url}')`, height: '228px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          </Col>
          <Col s={12} m={6} l={4}>
            <div className='event_text'>{eventTime(start_date, end_date)}</div>
            <div className='event_text'><Icon className='event_card_icon' size={17} icon={androidHand} />{`For ${min_age} to ${max_age} years old`}</div>
          </Col>
          <Col s={12} m={6} l={3}>
            <Row>
              <div className='event_title'>{title} </div>
            </Row>
            <Row>
              <div className='event_text'><Icon className='event_card_icon' size={17} icon={location} />{`${street}, ${city}, ${state}, ${zip}`}</div>
            </Row>
            <Row>
              <div className='event_text'><Icon className='event_card_icon' size={17} icon={smileO} />{description}</div>
            </Row>
          </Col>

          {/* <Col l={1}>
            {
              favorite ? <Icon icon={heart} /> : <Icon icon={heartO} />
            }
          </Col> */}
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