import React, { Component } from 'react'
import { Icon } from 'react-icons-kit'
import { heart } from 'react-icons-kit/fa/heart'
import { heartO } from 'react-icons-kit/fa/heartO'


import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { createFavoriteEvent, unLikeEvent } from '../../actions/events'
import '../../styles/eventPage.css'

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
        const { title, registered, image_url, min_age, max_age, street, city, state, event_description, favorite, zip } = this.props.event
        // this.props.events.payload
        return (
            <Row className="mt-3">
                <Col lg="4">
                    <img src={image_url} alt="event_image" ></img>
                </Col>
                <Col lg="7">
                    <div>{title} </div>
                    <div>{`${street}, ${city}, ${state}, ${zip}`}</div>
                    <div>{`From ${min_age} to ${max_age}`}</div>
                    <div>{event_description}</div>
                </Col>
                <Col lg="1">
                    {
                        favorite ? <Icon icon={heart} /> : <Icon icon={heartO} />
                    }
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createFavoriteEvent }, dispatch)
}

export default connect(null, mapDispatchToProps)(EventCard) 