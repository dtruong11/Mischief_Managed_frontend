import React, { Component } from 'react'
import { Row, Col, Button, Slider, Slide, Footer } from 'react-materialize'
import { Link } from 'react-router-dom'
import pic1 from '../../assets/fun4.jpg'
import pic2 from '../../assets/fun2.jpg'
import pic5 from '../../assets/fun5.jpg'

import '../../styles/home.css'


class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Row>
        <Col>
          <Slider style={{ marginBottom: '15px' }}>
            <Slide
              src={pic1}
              className='main_pic'
              title="Welcome to Mischief Managed!">
              Mischief Managed is a platform for families and friends to find kids activities .
            </Slide>
            <Slide
              src={pic2}
              title="Welcome Organizations"
              placement="left">
              Organizations, sign up to post your events and connect with families.
            </Slide>
            <Slide
              src={pic5}
              title="Browse our activities nearby you"
              placement="left">
              While we try to teach our children all about life, Our children teach us what life is all about. _Angela Schwindt
            </Slide>
          </Slider>
          <Row>
            <Col>
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
            </Col>
          </Row>

        </Col>
      </Row>
    )
  }
}

export default HomePage 