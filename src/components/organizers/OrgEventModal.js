import React from 'react';
import { Modal, Button, Row, Col, Card } from 'react-materialize'
import { eventTime } from '../events_page/EventCard'
import OrgEventReviews from './OrgEventReviews'
import OrgModalRegistrationCard from './OrgModalRegistrationCard'
import { Icon } from 'react-icons-kit'
import { withPlus } from 'react-icons-kit/entypo/withPlus'
import { location } from 'react-icons-kit/entypo/location'
import { calendar } from 'react-icons-kit/feather/calendar'
import { dollarSign } from 'react-icons-kit/feather/dollarSign'
import { androidHand } from 'react-icons-kit/ionicons/androidHand'
import { smileO } from 'react-icons-kit/fa/smileO'
import bee from '../../assets/bee.png'
import '../../styles/orgEventModal.css'


const OrgEventModal = (props) => {
  const { id, title, cost, description, image_url, street, city, state, zip, min_age, max_age, start_date, end_date, registration, reviews } = props.event

  return (
    <Modal className='modal_style' header={title} id={`event_${id}`} fixedFooter
      actions={
        <Button flat modal="close" waves="light">Close</Button>
      }
      trigger={
        <Icon className='event_icon' size={24} icon={withPlus} />
      }>
      <Row>
        <Col>
          <Row className='modal_event_info'>
            <Col l={5}>
              <div style={{ background: `url('${image_url}')`, height: '200px', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            </Col>
            <Col l={7}>
              <div>
                <Icon className="event_card_icon" size={18} icon={calendar} />
                {eventTime(start_date, end_date)}
              </div>
              <div>
                <Icon className='event_card_icon' size={17} icon={smileO} />{description}
              </div>
              <div>
                <Icon className="event_card_icon" size={18} icon={location} />
                {`${street}, ${city}, ${state}, ${zip}`}
              </div>
              <div>
                <Icon className='event_card_icon' size={17} icon={androidHand} />
                {`For ${min_age} to ${max_age} years old`}
              </div>
              <div>
                <Icon className="event_card_icon" size={20} icon={dollarSign} />  {cost}
              </div>
            </Col>
          </Row>
          <Row>
            <p>REGISTERED</p>
          </Row>
          <Row className='registration_section'>
            {
              registration && registration.length > 0 ?
                <div>
                  {
                    registration.map((el, idx) => {
                      return <OrgModalRegistrationCard el={el} idx={idx} />
                    })
                  }
                </div>
                :
                <Col>
                  <Row>
                    <img className='not_registered' src={bee} alt='no_registered_users' />
                  </Row>
                  <Row>
                    <p>No registration yet</p>
                  </Row>
                </Col>
            }
          </Row>
          <Row>
            <p>REVIEWS</p>
          </Row>
          <Row>
            <OrgEventReviews reviews={reviews} />
          </Row>
        </Col>
      </Row>
    </Modal >
  )
}

export default OrgEventModal