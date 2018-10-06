import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }



  render() {
    console.log('THIS IS HOMEPAGE')
    return (
      <Row>
        <Col>
          <Row>THIS IS HOME PAGE</Row>
          <Row>
            <Link to='/users/events'>Check out these events</Link>
          </Row>
          <Row>
            <Button>
              <Link to='/login/organizers'> Are you an organization?</Link>
            </Button>
          </Row>
          <Row>
            <Button>
              <Link to='/login/users'> Are you a user?</Link>
            </Button>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default HomePage 