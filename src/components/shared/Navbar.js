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
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { userVerify } from '../../actions/authUsers'
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

    componentDidMount = () => {
        this.props.userVerify()
    }

    toggleNavbar = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }


    render() {
        console.log("this.props.isLoggedIn", this.props.isLoggedIn)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/users/events" className="mr-auto">Mischief Managed</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    {this.props.isLoggedIn ? <Collapse isOpen={!this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
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
                        </Nav>
                    </Collapse> :

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/login/users" className="nav-link">Login</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>}
                </Navbar>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ userVerify }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)