import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { userLogout } from '../../actions/authUsers'
import Login from '../Login'
// import { getUser } from '../actions/authUsers'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggleNavbar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        console.log("this.props.auth.isLoggedIn", this.props.auth.isLoggedIn)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" className="mr-auto">Mischief Managed</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.isOpen} navbar>
                        {this.props.auth.isLoggedIn ? <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/activities">Activities</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/parenting">Parenting</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Profile
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Favorites
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Account
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Log out
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav> :
                            <NavItem>
                                <NavLink href="/login/users">Log In</NavLink>
                            </NavItem>}
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

const mapStateToProps = ({ auth }) => ({ auth })
// const mapDispatchToProps = dispatch => bindActionCreators({ getUser }, dispatch)

export default connect(mapStateToProps, null)(Navigation)