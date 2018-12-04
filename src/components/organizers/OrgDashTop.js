import React, { Component } from 'react'
import mainOrgPic from '../../assets/jumbotron.jpg'

import { Row, Col, Slider, Slide } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrg } from '../../actions/getOneOrg'
import '../../styles/orgDashboardTop.css'
import pic6 from '../../assets/kids_fun6.jpg'
import pic9 from '../../assets/kid_fun9.jpg'

class OrgDashTop extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    // this.props.getOrg()
  }


  render() {
    const { id, name, aboutus, email, lat_org, long_org, state_org, street_org, zip_org, logo } = this.props.authOrg.org
    return (
      <div className='top'>
        <Slider style={{ marginBottom: '15px' }}>
          <Slide
            src={pic6}
            className='main_pic'
            title={`Welcome, ${name} to Mischief Managed!`}>
            Mischief Managed is a platform for organization like you to connect with families and friends through fun activities .
            </Slide>
          <Slide
            src={pic9}
            title="Posting Events"
            placement="left">
            You can post your events by filling out the create event form.
            </Slide>
          <Slide
            src={logo}
            title={`About ${name}:`}
            placement="right">
            {aboutus}
          </Slide>
        </Slider>
      </div>
    )
  }
}

const mapStateToProps = ({ eventsByOrg, oneOrg, authOrg }) => ({ oneOrg: oneOrg.org, events: eventsByOrg.all, isLoading: eventsByOrg.isLoading, authOrg })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOrg }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgDashTop)