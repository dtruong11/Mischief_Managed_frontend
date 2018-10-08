import React from 'react';
import { Row, Col, Card } from 'react-materialize'
import '../../styles/orgEventReviews.css'
import moment from 'moment'


const OrgEventReviews = ({ reviews }) => {
  return (
    <Col>
      {
        reviews.length > 0
          ? <Row >
            <div style={{ marginTop: '250px' }}>REVIEWS</div>
            {
              reviews.map((review, idx) => {
                return (
                  <Card className='review_card' key={idx}>
                    <Row>
                      <Col lg={1}>
                        <img className='avatar' src={review.avatar} alt='avatar'></img>
                        <p>{review.first_name}</p>
                      </Col>
                      <Col lg={11}>
                        <p>{`${review.city}, ${review.state}`}</p>
                        <p>{`Posted in ${moment(review.created_at).format('MMMM YYYY')}`}</p>
                        <p>{review.content}</p>
                        <p>{review.votes}</p>
                      </Col>
                    </Row>
                  </Card>)
              })
            }
          </Row>
          :
          <Row>
            <Col>
              <p>REVIEWS</p>
              <p>No reviews yet</p>
            </Col>
          </Row>
      }
    </Col>
  )
}

export default OrgEventReviews