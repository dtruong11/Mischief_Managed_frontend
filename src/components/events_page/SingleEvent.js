import React, { Component } from 'react'
import { Row, Col, Container, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOneEvent } from '../../actions/events'
import RegisterCard from './RegisterCard'
import '../../styles/singleEventPage.css'
import { eventTime } from './EventCard'
import { Icon } from 'react-icons-kit'
import { calendar } from 'react-icons-kit/feather/calendar'
import { dollarSign } from 'react-icons-kit/feather/dollarSign'
import { crosshair } from 'react-icons-kit/feather/crosshair'

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
    // const eventTitle = this.props.location.pathname
    // const event = this.props.events.find(({ id }) => id === eventId) 
    // console.log('THIS IS EVENT IN SINGLE EVENT PAGE', event)
    const event = this.props.events.payload
    console.log('this is a single event', event)
    const isLoading = this.props.events.isLoading
    const { id, title, image_url, description, cost, street, city, state, zip, min_age, max_age, aboutus, start_date, end_date, name, logo } = event

    return (

      <div>
        {
          isLoading
            ?
            <div>Still Loading </div>
            :
            <Container style={{ marginTop: '18px' }} fluid>
              <Row>
                <Col>
                  <div className='info'>
                    <p className='title'>{title}</p>
                    <p className='detail'>Age {min_age} to {max_age}</p>
                    <p className='detail'>Organized By {name}</p>
                    <br />
                    <p>{description}</p>
                  </div>
                </Col>
                <Col>
                  <img className='event_image' src={image_url} alt='event_image'></img>
                </Col>
                <Col>
                  <div className='info_right'>
                    <img className='logo' src={logo}></img>
                    <br/>
                    <Icon size={25} icon={calendar} />  {eventTime(start_date, end_date)}
                    <br />
                    <br />
                    <Icon size={25} icon={crosshair} />  {street}, {city}, {state}, {zip}
                    <br />
                    <br />
                    <Icon size={25} icon={dollarSign} />  {cost}
                    <br />
                    <br />
                    <Button className='register_btn' onClick={() => this.handleRegisterClick}>Register</Button>
                  </div>
                </Col>
              </Row>
            </Container>

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