import React from 'react'
import { Col, Row } from 'react-materialize'
import '../../styles/reviewImage.css'
import SingleReview from './SingleReview'

const Reviews = (props) => {
  const { reviews } = props
  return (
    <Col>
      {
        reviews.length > 0 && reviews.map((review, idx) => {
          return <SingleReview key={idx} review={review} />
        })
      }
    </Col>
  )
}

export default Reviews 