import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'react-materialize'

const Signin = () => {
  return (
    <div className='signin'>
      <div className='signin_item'>
        <p className='title_signin'>Hi Families</p>
        <div className='signin_fam' style={{ backgroundImage: `url('https://snag.gy/Rmbc4k.jpg')` }}></div>
        <p>Explore and register for fun events. </p>
        <Button className='btn_login'>
          <Link className='btn_login' to='/login/users'> Parents, log in here</Link>
        </Button>
      </div>
      <div className='signin_item'>
        <p className='title_signin'>Hi Organizers</p>
        <div className='signin_img' style={{ backgroundImage: `url('https://snag.gy/blDcVa.jpg')` }}></div>
        <p>Join in our fun to create and manage your events. </p>
        <Button className='btn_login'>
          <Link className='btn_login' to='/login/organizers'> Organizers, log in here</Link>
        </Button>
      </div>
    </div >
  )
}

export default Signin