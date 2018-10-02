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
  };

  render() {
    const event = this.props.events.payload
    console.log('this is a single event', event)
    const isLoading = this.props.events.isLoading

    return (
      <div>
        {
          isLoading
            ?
            <div>Still Loading </div>
            :
            <div>
              <Container style={{ marginTop: '18px' }} fluid>
                <SingleEventTop event={event} />
              </Container>
              <Container>
                <OrgInfoEvent event={event} />
                <Row>
                  <p className='sub_heading'> Location  </p>
                  <br />
                  <br />
                  <SingleEventMap lat={event.lat} lng={event.long} />
                </Row>
                <Row>
                  <p className='sub_heading'> Reviews </p>
                </Row>
              </Container>
            </div>
        }
      </div>

    )
  }
}

Container.propTypes = {
  fluid: true
  // PropTypes.bool
  // applies .container-fluid class
}

const mapStateToProps = ({ events }) => ({ events })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOneEvent }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleEventPage))