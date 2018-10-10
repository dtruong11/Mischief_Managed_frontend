import React from 'react'
import { Row, Col } from 'react-materialize'
import { Icon } from 'react-icons-kit'
import { mail } from 'react-icons-kit/feather/mail'
import { location } from 'react-icons-kit/entypo/location'
import '../../styles/singleEventPage.css'


const OrgInfoEvent = (props) => {
  const { aboutus, name, email, street_org, city_org, state_org } = props.event
  return (
    <Row className='org_info_wrapper'>
      <Col>
        <p className='org_title'> {name}</p>
        <p>{aboutus}</p>
      </Col>
      <Col>
        <p>
          <Icon className='event_card_icon' size={17} icon={location} />
          {`${street_org}, ${city_org}, ${state_org}`}
        </p>
        <Icon className='event_card_icon' size={17} icon={mail} /> <span>{email}</span>
      </Col>
    </Row>
  )
}

export default OrgInfoEvent
