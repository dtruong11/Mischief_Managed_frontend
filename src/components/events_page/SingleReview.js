import React from 'react'
import { Col, Row } from 'reactstrap'
import moment from 'moment'
import { Icon } from 'react-icons-kit'
import {ic_stars} from 'react-icons-kit/md/ic_stars'
import '../../styles/reviewImage.css'

const SingleReview = (props) => {
  const { content, votes, created_at, updated_at, first_name, last_name, avatar, city, state } = props.review
  const postedTime = moment(created_at).format('MMMM YYYY')
  return (
    <Row>
      <Col>
        <Row>
          <Col className='reviewer' lg="1">
            <img className='avatar' src={avatar} alt='avatar'></img>
            <p>{first_name}</p>
          </Col>
          <Col lg="11">
            <p>{`Posted in ${postedTime}`}</p>
            <p>{content}</p>
            <p><Icon  className='event_card_icon' icon={ic_stars} />{votes}/5</p>
          </Col>
        </Row>
        <hr />
      </Col>
    </Row>
  )
}

export default SingleReview 