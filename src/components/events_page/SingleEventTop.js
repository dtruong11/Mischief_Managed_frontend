import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import { eventTime } from './EventCard'
import { Icon } from 'react-icons-kit'
import { calendar } from 'react-icons-kit/feather/calendar'
import { dollarSign } from 'react-icons-kit/feather/dollarSign'
import { location } from 'react-icons-kit/entypo/location'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import events from '../../requests/events'
import '../../styles/singleEventPage.css'



class SingleEventTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedRegister: false,
      isRegistered: false
    }
  }
  componentDidMount = async () => {
    const isRegistered = await events.checkRegistered(this.props.event.event_id)
    if (isRegistered) {
      this.setState({
        isRegistered: isRegistered.data.isRegistered
      })
    }
  }

  handleRegisterClick = () => {
    this.setState({
      clickedRegister: true
    })

  }

  checkLoggedinRegistered = (loggedIn, registered) => {
    if (!loggedIn) {
      return (<div>Please log in to register</div>)
    } else {
      if (registered) {
        return <div>You have registered for this event.</div>
      } else {
        return <Button className='register_btn' onClick={this.handleRegisterClick}>Register</Button>
      }
    }
  }

  render() {
    const { id, title, image_url, description, cost, street, city, state, zip, min_age, max_age, start_date, end_date, name, logo } = this.props.event
    return (
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
        <div className='event_card_img' style={{ background: `url('${image_url}')`, height: '400px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </Col>
        <Col>
          {
            this.state.clickedRegister
              ?
              <div className='info_right'>
                <div>
                  <RegisterForm eventId={id} />
                </div>
              </div>
              :
              <div className='info_right'>
                <img className='logo' src={logo}></img>
                <br />
                <Icon className="event_card_icon" size={18} icon={calendar} />  {eventTime(start_date, end_date)}
                <br />
                <br />
                <Icon className="event_card_icon" size={18} icon={location} />  {street}, {city}, {state}, {zip}
                <br />
                <br />
                <Icon className="event_card_icon" size={20} icon={dollarSign} />  {cost}
                <br />
                <br />
                {
                  this.checkLoggedinRegistered(this.props.isLoggedIn, this.state.isRegistered)
                }
              </div>
          }
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  }
}

export default connect(mapStateToProps, null)(SingleEventTop)