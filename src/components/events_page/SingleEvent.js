import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
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
    const eventTitle = this.props.location.pathname.split('/')[2]
    this.props.getOneEvent(eventTitle)
    // console.log('Inside Singleevent.js componentdidmount', this.props)
  }

  renderEvent = (event) => {
    console.log('AM I RENDERING EVENT?');

    return (
      <div>
        <Container style={{ marginTop: '18px' }} fluid>
          <SingleEventTop event={event} />
        </Container>
        <Container>
          <OrgInfoEvent event={event} />
          <Row>
            <p className='sub_heading'> Location </p>
            <br />
            <br />
            <SingleEventMap lat={event.lat} lng={event.long} />
          </Row>
          <Row>
            <Col>
              <Row>
                <p className='sub_heading'> Reviews </p>
              </Row>
              <Row>
                <Reviews reviews={event.reviews} />
              </Row>
              <Row>
                <ReviewForm eventId={event.id} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  render() {
    console.log('this.props inside SingleEvent', this.props)
    const event = this.props.event
    // console.log('this is a single event', event)
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