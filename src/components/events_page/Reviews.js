import React from 'react'
import { Col, Row } from 'reactstrap'
import '../../styles/reviewImage.css'
import SingleReview from './SingleReview'

const Reviews = (props) => {
  console.log('reviews props inside component', props)
  const { reviews } = props
    return (
      <Col>
        {
          reviews.length > 0 && reviews.map(review => {
            return <SingleReview review={review} />
          })
        }
      </Col>
    )
}

export default Reviews 