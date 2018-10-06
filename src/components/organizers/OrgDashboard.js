import React, { Component } from 'react'
import { Row, Col, Button } from 'react-materialize'
import mainOrgPic from '../../assets/jumbotron.jpg'
// import { Link } from 'react-router-dom'

class OrgDashboard extends Component {
  constructor(props) {
    super(props)
    console.log('this.props', this.props)
  }

  render() {
    // GET ONE ORGANIZATION WITH NESTED EVENTS
    return (
      <div>
        {/* <img src={} alt='logo'/> */}
        <img style={{ width: '100%' }} src={mainOrgPic} alt='organization_image' />
      </div>
    )

  }
}

export default OrgDashboard 