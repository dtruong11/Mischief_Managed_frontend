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
    console.log('this.props.getOrg()', this.props.getOrg())
    this.props.getOrg()
  }

  render() {
    const { id, name, aboutus, email, lat_org, long_org, state_org, street_org, zip_org, logo } = this.props.oneOrg
    return (
      <div className='top'>
        {/* <Row>
          <Col lg={3}>
            <img className='logo_img' src={logo} alt='org_logo' />
          </Col>
          <Col lg={9}>
            <div className='org-info'>{aboutus}</div>
          </Col>
        </Row> */}
        {/* <Row>
          <div className='contain-overlay'>
            <img className='wallpaper' src={mainOrgPic} alt='organization_image' />
            <img className='logo_img' src={logo} alt='org_logo' />
          </div>
        </Row>
        <Row>
          <Col >
            <div className='org-info'>{aboutus}</div>
          </Col>
        </Row> */}
        <Slider style={{ marginBottom: '15px' }}>
          <Slide
            // style={{ position: 'relative', overflow: 'hidden' }}
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

const mapStateToProps = ({ eventsByOrg, oneOrg }) => ({ oneOrg: oneOrg.org, events: eventsByOrg.all, isLoading: eventsByOrg.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOrg }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgDashTop)