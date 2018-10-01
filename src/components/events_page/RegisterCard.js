import React from 'react'
import { Row, Col, Card, CardTitle, Button } from 'react-materialize'
import { eventTime } from './EventCard'


const RegisterCard = (props) => {
    const {image_url, cost, name, start_date, end_date} = props.event
    return(
        <Card
        header={<CardTitle image={image_url}></CardTitle>}
        actions={[
          <Row>
            <Col>
              ${cost}
            </Col>
            <Col>
              <Button className='register_btn' onClick={() => this.handleRegisterClick}>Register</Button>
            </Col>
          </Row>
        ]}>
        <p className='org_name'>By {name}</p>
        <br />
        <p>{eventTime(start_date, end_date)}</p>
      </Card>
    )
}

export default RegisterCard