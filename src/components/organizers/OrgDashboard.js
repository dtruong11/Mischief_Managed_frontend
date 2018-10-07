import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getEventsByOrg } from '../../actions/eventsByOrg'
import { getOrg } from '../../actions/getOneOrg'
import OrgDashTop from './OrgDashTop'
import OrgEventForm from './OrgEventForm'
// import { Link } from 'react-router-dom'

class OrgDashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.getOrg()
    this.props.getEventsByOrg()
  }

  render() {
    // GET ONE ORGANIZATION WITH NESTED EVENTS
    const eventList = this.props.events.data
    console.log('this.props in orgDashboard', this.props)

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
      </div>
    )
  }
}

const mapStateToProps = ({ eventsByOrg, oneOrg }) => ({ oneOrg: oneOrg.org, events: eventsByOrg.all, isLoading: eventsByOrg.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEventsByOrg, getOrg }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgDashboard)