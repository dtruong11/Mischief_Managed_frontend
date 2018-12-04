import React, { Component } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneEvent } from '../../actions/events'
import '../../styles/singleEventPage.css'

import OrgInfoEvent from './OrgInfoEvent'
import SingleEventTop from './SingleEventTop'
import SingleEventMap from '../SingleEventMap'
import Reviews from './Reviews'
import ReviewForm from './ReviewForm'


class SingleEventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleRegisterClick = () => {
    this.setState({
      clicked: true
    })
  }

  componentDidMount = () => {

    const eventId = this.props.location.pathname.split('/')[2]
    this.props.getOneEvent(eventId)
  }

  renderEvent = (event) => {
    return (
      <div>
        <Container className='single_event_wrapper' fluid>
          <SingleEventTop event={event} />
        </Container>
        <Container className="org_info_section" >
          <Row>
            <Col>
              <Row>
                <p className='sub_heading'> About the Organization </p>
              </Row>
              <OrgInfoEvent event={event} />
            </Col>
          </Row>
          <Row className='location_section'>
            <Col>
              <Row>
                <p className='sub_heading'> Location </p>
              </Row>
              <Row>
                <SingleEventMap className="map_section" lat={event.lat} lng={event.long} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className='review_section'>
              <Row>
                <p className='sub_heading'> Reviews </p>
              </Row>
              <Row>
                <Reviews reviews={event.reviews} />
              </Row>
              <Row>
                <ReviewForm eventId={event.event_id} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  render() {
    const event = this.props.event
    const isLoading = this.props.isLoading

    return (
      <div>
        {
          !isLoading && event.hasOwnProperty('reviews')
            ? this.renderEvent(event) : <div>Still Loading </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ events }) => ({ event: events.selected, isLoading: events.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOneEvent }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleEventPage))