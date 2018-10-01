import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Icon } from 'react-icons-kit'
import { mail } from 'react-icons-kit/feather/mail'

const OrgInfoEvent = (props) => {
  const { aboutus, name, email, street_org, city_org, state_org } = props.event
  return (
    <Row>
      <Col>
        <p>About {name}</p>
        <p>{aboutus}</p>
        <Icon icon={mail} /> <span>{email}</span>
      </Col>
      <Col>
        <p>{street_org}</p>
        <p>{city_org}</p>
        <p>{state_org}</p>
      </Col>
    </Row>
  )
}

export default OrgInfoEvent
