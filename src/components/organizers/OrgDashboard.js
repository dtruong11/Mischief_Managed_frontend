import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEventsByOrg } from '../../actions/eventsByOrg'
import { getOrg } from '../../actions/getOneOrg'
import OrgDashTop from './OrgDashTop'
import OrgEventForm from './OrgEventForm'
import OrgEventList from './OrgEventList'

// import { Link } from 'react-router-dom'

class OrgDashboard extends Component {
  constructor(props) {
    super(props)
  }

  // componentDidMount = async () => {
  //   // await this.props.getOrg()
  //   // await this.props.getEventsByOrg()
  // }

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
            <OrgEventForm />
          </Col>
        </Row>
        <Row>
          <Col>
            <OrgEventList/>
          </Col>
        </Row>
      </div>
    )
  }
}


export default OrgDashboard