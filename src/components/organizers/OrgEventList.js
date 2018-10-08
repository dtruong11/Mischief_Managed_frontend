import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row, Col, Modal
} from 'react-materialize'
import { getEventsByOrg } from '../../actions/eventsByOrg'
import { withRouter } from 'react-router-dom'
import OrgEventCard from './OrgEventCard'
import pic from '../../assets/kidevents.jpg'
import '../../styles/orgEventList.css'
import { checkBefore } from './OrgEventForm'


class OrgEventList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    this.props.getEventsByOrg()
  }

  createEventCard = (eventsArr) => {
    if (eventsArr.length > 0) {
      return eventsArr.map((event, idx) => {
        return (
          <Row>
            <OrgEventCard key={idx} event={event} favorite={event.favorite} />
          </Row>
        )
      })
    } else {
      return (
        <Row>
          <p>No Events Yet</p>
        </Row>
      )
    }
  }

  displayEvents = (events) => {
    if (events.length > 0) {
      const past = events.filter(event => checkBefore(event.end_date) === 'past')
      const today = events.filter(event => checkBefore(event.end_date) === 'today')
      const future = events.filter(event => checkBefore(event.end_date) === 'future')
      return (
        <Col>
          <Row>
            <Col>
              <Row>
                TODAY's EVENTS
              </Row>
              {this.createEventCard(today)}
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                UPCOMING EVENTS
              </Row>
              {this.createEventCard(future)}
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                PAST EVENTS
              </Row>
              {this.createEventCard(past)}
            </Col>
          </Row>
        </Col>)
    } else {
      return (
        <div className="not_found_text">
          <img src={pic} className="not_found_events" />
          <p>Events not Found</p>
        </div>
      )
    }
  }

  render() {
    console.log('this.props.events YAYYY LOOK', this.props.events[0])
    return (
      <Col>
        {
          this.props.isLoading ? <div>Loading </div>
            :
            <Row>
              {
                this.displayEvents(this.props.events)
              }
            </Row>
        }
      </Col>
    );
  }

}


const mapStateToProps = ({ eventsByOrg }) => ({ events: eventsByOrg.all, isLoading: eventsByOrg.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEventsByOrg }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgEventList))
