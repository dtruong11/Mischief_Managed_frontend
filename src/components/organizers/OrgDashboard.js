import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import OrgDashTop from './OrgDashTop'
import OrgEventForm from './OrgEventForm'
import OrgEventList from './OrgEventList'

class OrgDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // GET ONE ORGANIZATION WITH NESTED EVENTS
    return (
      <div>
        <Row>
          <Col>
            <OrgDashTop />
          </Col>
        </Row>
        <Row>
          <Col>
            <OrgEventList/>
          </Col>
        </Row>
        <Row>
          <Col>
            <OrgEventForm />
          </Col>
        </Row>
      </div>
    )
  }
}


export default OrgDashboard