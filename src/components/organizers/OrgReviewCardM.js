import React from 'react'
import moment from 'moment'
import { Row, Col, Card } from 'react-materialize'
import { Icon } from 'react-icons-kit'
import {ic_stars} from 'react-icons-kit/md/ic_stars'
import '../../styles/orgEventReviews.css'

const OrgReviewCardM = ({ review, idx }) => {
  const { avatar, created_at, content, votes, first_name } = review
  return (
    <Card className='review_card' key={idx}>
      <Row>
        <Col>
          <Row>
            <img className='avatar' src={avatar} alt='avatar'></img>
          </Row>
          <Row className='reviewer' >
            <p>{first_name}</p>
          </Row>
          <Row>
            <p>{`Posted in ${moment(created_at).format('MMMM YYYY')}`}</p>
          </Row>
          <Row className='review_content'>
            <p>{content}</p>
          </Row>
          <Row>
            <p><Icon className='event_card_icon' icon={ic_stars} />{votes}/5</p>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default OrgReviewCardM







{/* <Row>
  <Col m={4} l={2}>
    <img className='avatar' src={review.avatar} alt='avatar'></img>
    <p>{review.first_name}</p>
  </Col>
  <Col m={8} l={10}>
    <p>{`${review.city}, ${review.state}`}</p>
    <p>{`Posted in ${moment(review.created_at).format('MMMM YYYY')}`}</p>
    <p>{review.content}</p>
    <p>{review.votes}/5</p>
  </Col>
</Row> */}