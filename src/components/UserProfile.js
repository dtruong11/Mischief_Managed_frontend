import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { connect } from 'react-redux'

const UserProfile = (props) => {
  console.log('up props', props)
  return (
    <div>
      <Container>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}>
            <h1 className="text-center">User Profile Page</h1>
          </Col>
        </Row>
        <Row style={{marginTop: 20}}>
          <Col>
            <img src={props.user.avatar} alt="profile" />
          </Col>
          <Col>
            <h3>Name: {props.user.first_name} {props.user.last_name}</h3>
            <h3>Email: {props.user.email}</h3>
            <h3>Address: {`${props.user.city}, ${props.user.state}, ${props.user.zip}`}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(UserProfile)