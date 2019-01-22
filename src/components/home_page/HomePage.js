import React, { Component } from 'react'
import { Row, Col, Button, Footer } from 'react-materialize'
import { Link } from 'react-router-dom'
import Benefits from './Benefits'
import Signin from './Singin'
import '../../styles/home.css'


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col>
          <Row>
            <div className='home_img' style={{ backgroundImage: `url('https://source.unsplash.com/IVKX_KrJf7g/1500x800')` }}></div>
            <div className='get_started'>
              <Link className='started_link' to="/users/events">Get Started</Link>
            </div>
          </Row>
          <Row className='benefits_section'>
            <Benefits />
          </Row>
          <Row>
            <Signin />
            {/* <Col>
              <div className='signin'>
                <p className='title_signin'>Ready to connect with families?</p>
                <p>By signing up, you will be able to create and manage your events. You can see who signed up for your events to better plan for the future activities. </p>
                <Button className='btn_login'>
                  <Link className='btn_login' to='/login/organizers'> Organizers, log in here</Link>
                </Button>
              </div>
            </Col>
            <Col>
              <div className='signin'>
                <p className='title_signin'>Ready to find activities for your children?</p>
                <p>By signing up, you can explore exciting activities nearby you and quickly register for them. Mischief Managed cannot wait to have you on board. Join our fun! </p>
                <Button className='btn_login'>
                  <Link className='btn_login' to='/login/users'> Parents, log in here</Link>
                </Button>
              </div>
            </Col> */}
          </Row>

        </Col>
      </Row>
    )
  }
}

export default HomePage 