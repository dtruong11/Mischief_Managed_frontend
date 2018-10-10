import React from 'react';
import { Row, Col, Card } from 'react-materialize'
import OrgReviewCardM from './OrgReviewCardM'
import '../../styles/orgEventReviews.css'
import '../../styles/orgEventModal.css'
import bee from '../../assets/bee.png'



const OrgEventReviews = ({ reviews }) => {
  return (
    <Col>
      {
        reviews && reviews.length > 0
          ? <Row >
            {
              reviews.map((review, idx) => {
                return (
                  <OrgReviewCardM review={review} idx={idx} />)
              })
            }
          </Row>
          :
          <div>
            <Row>
              <img className='not_registered' src={bee} alt='no_registered_users' />
            </Row>
            <Row>
              <p>No reviews yet</p>
            </Row>
          </div>
      }
    </Col>
  )
}

export default OrgEventReviews