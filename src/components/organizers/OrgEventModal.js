import React from 'react';
import { Modal, Button, Row, Col, Card } from 'react-materialize'
import { eventTime } from '../events_page/EventCard'
import '../../styles/orgEventModal.css'
import OrgEventReviews from './OrgEventReviews'

const OrgEventModal = (props) => {
  const modalStyle = {
    // justifyContent: 'center',
    height: '1000px',
    width: '1000px'
  }

  const imageStyle = {
    height: '200px',
    width: '200px'
  }
  const { id, title, description, image_url, street, city, state, zip, min_age, max_age, start_date, end_date, registration, reviews } = props.event

  return (
    <Modal
      style={modalStyle}
      header={title}
      id={`event_${id}`}
      fixedFooter
      actions={
        <Button flat modal="close" waves="light">Close</Button>
      }
      trigger={
        <Button>See this event</Button>
      }>
      <Row style={{ marginBottom: '180px' }}>
        <Col lg={4}>
          <img style={imageStyle} src={image_url} />
        </Col>
        <Col lg={8}>
          <Row> {eventTime(start_date, end_date)}</Row>
          <Row> About: {description}</Row>
          <Row> Location: {`${street}, ${city}, ${state}, ${zip}`}</Row>
          <Row> Age: {`For ${min_age} to ${max_age} years old`}</Row>
        </Col>
      </Row >
      <p>REGISTERED:</p>
      <Row>
        <Col>
          {
            registration.length > 0 &&
            <Row className='wrapper'>

              <div className='wrapper'>
                {
                  registration.map((el, idx) => {
                    return (
                      <Card className='registration_card' key={idx}>
                        <Row>
                          <Col lg={3}>
                            <img className='card_img' src={el.avatar} />
                            <p>{`${el.first_name} ${el.last_name}`}</p>
                            <p>{`${el.user_state}`}</p>
                          </Col>
                          <Col lg={9}>
                            <p>{el.attendingChildren.length < 1 ? `Attending Child:` : `Atttending Children`}</p>
                            {
                              el.attendingChildren.map((child, idx) => {
                                return <p key={idx}>{`${child.name},`}{child.age > 1 ? `${child.age} years old` : `${child.age} year old`}</p>
                              })
                            }
                          </Col>
                        </Row>
                        <Row>
                          <p>{el.user_notes}</p>
                        </Row>
                      </Card>)
                  })
                }
              </div>
            </Row>
          }
        </Col>
      </Row>
      <p>REVIEWS:</p>

    </Modal>
  )
}

export default OrgEventModal