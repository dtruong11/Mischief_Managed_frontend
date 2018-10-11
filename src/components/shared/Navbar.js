import React, { Component } from 'react'
import {
  Navbar, NavItem,
} from 'react-materialize'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userVerify } from '../../actions/authUsers'
import { userLogout } from '../../actions/authUsers'
import { orgVerify, orgLogout } from '../../actions/authOrgs'
import { withRouter } from 'react-router-dom'
import '../../styles/home.css'


class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount = () => {
    this.props.orgVerify()
    this.props.userVerify()
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  checkLogin = () => {
    console.log('this.props.authOrg', this.props.authOrg)

    let orgName = ''
    if (this.props.authOrg.hasOwnProperty('name')) {
      orgName = this.props.authOrg.name || `Organization`
    }

    const { userLogout, orgLogout, history, isLoggedIn, isLoggedInOrg } = this.props
    if (isLoggedIn) {
      return (
        <div>
          <li><Link to="/users/events">Activities</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/home' onClick={(e) => {
            userLogout(history)
          }}>Log Out</Link></li>
        </div>
      )
    } else if (isLoggedInOrg) {
      return (
        <div>
          <li><Link to='/organizers/landing'>Welcome, {orgName}</Link></li>
          <li><Link to='/home' onClick={(e) => {
            orgLogout(history)
          }}>Log Out</Link></li>
        </div>
      )
    } else {
      return (
        <div>
          <li><Link to="/users/events">Activities</Link></li>
          <li><Link to='/login/users'>Login</Link></li>
          <li><Link to='/signup/users'>Sign Up</Link></li>
        </div>
      )
    }
  }


  render() {
    return (
      <Navbar className='nav_style' brand='Mischief Managed' right>
        {
          this.checkLogin()
        }
      </Navbar>
    );
  }

}


function mapStateToProps({ auth, authOrg }) {
  return {
    isLoggedIn: auth.isLoggedIn,
    isLoggedInOrg: authOrg.isLoggedIn,
    authOrg: authOrg.org
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ userVerify, userLogout, orgVerify, orgLogout }, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation))

