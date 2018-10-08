import React from 'react';
import { Row, Col, Card } from 'react-materialize'
import '../../styles/orgEventReviews.css'
import moment from 'moment'


const OrgEventReviews = ({ reviews }) => {
  return (
    <Col>
      {
        reviews.length > 0
          ? <Row className='wrapper'>
            <p>REVIEWS</p>
            {
              reviews.map((review, idx) => {
                return (
                  <div className='review_card' key={idx}>
                    <Row>
                      <Col>
                        <Row>
                          <Col lg="1">
                            <img className='avatar' src={review.avatar} alt='avatar'></img>
                            <p>{review.first_name}</p>
                          </Col>
                          <Col lg="11">
                            <p>{`${review.city}, ${review.state}`}</p>
                            <p>{`Posted in ${moment(review.created_at).format('MMMM YYYY')}`}</p>
                            <p>{review.content}</p>
                            <p>{review.votes}</p>
                          </Col>
                        </Row>
                        <hr />
                      </Col>
                    </Row>
                  </div>)
              })
            }
          </Row>
          : <Row>
            <p>REVIEWS</p>
            <p>No reviews yet</p>
          </Row>
      }
    </Col>
  )
}

export default OrgEventReviews