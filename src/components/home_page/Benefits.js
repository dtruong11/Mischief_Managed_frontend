import React from 'react'
import { Row, Col } from 'react-materialize'

const Benefit = () => {
  return (
    <Col className='benefit'>
      <Row>
        <p className='benefit_intro'>How Mischief Managed Can Help</p>
      </Row>
      <Row className='benefit_items'>
        <Col>
          <div className='benefit_img' style={{ backgroundImage: `url('https://snag.gy/F4uEvb.jpg')` }}></div>
          <div className='benefit_description'>Child Development</div>
        </Col>
        <Col>
          <div className='benefit_img' style={{ backgroundImage: `url('https://snag.gy/HY76Eg.jpg')` }}></div>
          <div className='benefit_description'>Meaningful Family Time</div>
        </Col>
        <Col>
          <div className='benefit_img' style={{ backgroundImage: `url('https://snag.gy/KSIxQi.jpg')` }}></div>
          <div className='benefit_description'>Informative Reviews</div>
        </Col>
      </Row>
    </Col>
  )
}

export default Benefit