import React from 'react';
import { Row, Col, Card } from 'react-materialize'
import { Icon } from 'react-icons-kit'
import { androidHand } from 'react-icons-kit/ionicons/androidHand'
import '../../styles/orgEventModal.css'


const OrgModalReviewCard = ({ el, idx }) => {
  const { first_name, avatar, last_name, user_state, attendingChildren, user_notes } = el
  return (
    <Card className='registration_card' key={`${first_name}_${idx}`}>
      <Row>
        <Col l={3}>
          <img className='card_img' src={avatar} />
          <p>{`${first_name} ${last_name}`}</p>
          <p>{`${user_state}`}</p>
        </Col>
        <Col l={9}>
          <p>{attendingChildren.length <= 1 ? `Attending Child:` : `Atttending Children:`}</p>
          {
            attendingChildren.map((child, idx) => {
              return (
                <div>
                  <p key={idx}>
                    <Icon className='event_card_icon' size={17} icon={androidHand} />
                    {`${child.name}, `}{child.age > 1 ? `${child.age} years old` : `${child.age} year old`}</p>
                </div>)
            })
          }
        </Col>
      </Row>
      <Row>
        <p>{user_notes}</p>
      </Row>
    </Card>
  )
}

export default OrgModalReviewCard