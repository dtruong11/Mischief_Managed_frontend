import React, { Component } from 'react'
import mainOrgPic from '../../assets/jumbotron.jpg'

import { Row, Col } from 'react-materialize'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getOrg } from '../../actions/getOneOrg'
import '../../styles/orgDashboardTop.css'

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
      <Row>
        <Col>
          <Row>
            <div className='contain-overlay'>
              <img className='wallpaper' src={mainOrgPic} alt='organization_image' />
              <img className='logo_img' src={logo} alt='org_logo' />
            </div>
          </Row>
          <Row>
            <div className='org-info'>{aboutus}</div>
          </Row>
        </Col>
      </Row>
    )

  }
}

const mapStateToProps = ({ eventsByOrg, oneOrg }) => ({ oneOrg: oneOrg.org, events: eventsByOrg.all, isLoading: eventsByOrg.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getOrg }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrgDashTop)