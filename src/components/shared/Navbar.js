import React, { Component } from 'react'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap'
import {
  Navbar, NavItem,
} from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userVerify } from '../../actions/authUsers'
import { userLogout } from '../../actions/authUsers'
import { orgVerify, orgLogout } from '../../actions/authOrgs'
import { withRouter } from 'react-router-dom'


// import Login from '../Login'
// import { getUser } from '../actions/authUsers'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount = () => {
    //ASK 
    // const orgUser = this.props.history.location.pathname.includes('organizers')
    // if (orgUser) {
      this.props.orgVerify()
    // }
    // this.props.userVerify()
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  checkLogin = () => {

    let orgName = ''
    if (this.props.authOrg.hasOwnProperty('name')) {
      orgName = this.props.authOrg.name || `Organization`
    }

    const { userLogout, orgLogout, history, isLoggedIn, isLoggedInOrg } = this.props
    if (isLoggedIn) {
      return (
        <div>
          <NavItem href='/users/events'>Activities</NavItem>
          <NavItem href="/profile">Profile</NavItem>
          <NavItem onClick={() => userLogout(history)}>Log Out</NavItem>
        </div>
      )
    } else if (isLoggedInOrg) {
      return (
        <div>
          <NavItem>Welcome, {orgName}</NavItem>
          <NavItem onClick={(e) => {
            e.preventDefault()
            orgLogout(history)
          }}>Log Out</NavItem>
        </div>)
    } else {
      return (
        <div>
          <NavItem href="/login/users">Login</NavItem>
          <NavItem href="/signup/users" >Sign Up</NavItem>
        </div>
      )
    }
  }


  render() {
    return (
      <Navbar brand='Mischief Managed' right>
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


