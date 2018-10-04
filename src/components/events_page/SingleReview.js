import React from 'react'
import { Col, Row } from 'reactstrap'
import '../../styles/reviewImage.css'
import moment from 'moment'

const SingleReview = (props) => {
  const { content, votes, created_at, updated_at, first_name, last_name, avatar, city, state } = props.review
  const postedTime = moment(created_at).format('MMMM YYYY')
  console.log('postedTime', postedTime)
  return (
    <Row>
      <Col>
        <Row>
          <Col lg="1">
            <img className='avatar' src={avatar} alt='avatar'></img>
            <p>{first_name}</p>
          </Col>
          <Col lg="11">
            <p>{`Posted in ${postedTime}`}</p>
            <p>{content}</p>
            <p>{votes}</p>
          </Col>
        </Row>
        <hr />
      </Col>
    </Row>
  )
}

export default SingleReview 