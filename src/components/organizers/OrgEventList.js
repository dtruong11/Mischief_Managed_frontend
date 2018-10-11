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
import bee from '../../assets/bee.png'

class OrgEventList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.getEventsByOrg()
  }

  createEventCard = (eventsArr) => {
    if (eventsArr.length > 0) {
      return eventsArr.map((event, idx) => {
        return (
          <OrgEventCard key={`${event.title}_${idx}`} event={event} favorite={event.favorite} />
        )
      })
    } else {
      return (
        <Row>
          <Col>
            <Row>
              <img className='no_event_pic' src={bee} alt='no_event' />
            </Row>
            <Row>
              <p className="not_found_text">No Events Yet</p>
            </Row>
          </Col>
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
        <div className='event_block'>
          <Row className='all_events'>
            <Col>
              <Row>
                <p className="section_text">TODAY's EVENTS</p>
              </Row>
              {this.createEventCard(today)}
            </Col>
          </Row>
          <Row className='all_events'>
            <Col>
              <Row>
                <p className="section_text">UPCOMING EVENTS</p>
              </Row>
              {this.createEventCard(future)}
            </Col>
          </Row>
          <Row className='all_events'>
            <Col>
              <Row>
                <p className="section_text">PAST EVENTS</p>
              </Row>
              {this.createEventCard(past)}
            </Col>
          </Row>
        </div>)
    } else {
      return (
        <div className="not_found_text">
          <img src={pic} className="not_found_events" />
          <p className="not_found_text">Events not Found</p>
        </div>
      )
    }
  }

  render() {
    console.log('this.props.events in OrgEventList component', this.props.events)
    return (
      <Col>
        {
          this.props.isLoading ? <div> </div>
            :
            this.displayEvents(this.props.events)
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
