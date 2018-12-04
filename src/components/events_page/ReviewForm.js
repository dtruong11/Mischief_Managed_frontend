import React, { Component } from 'react'
import { render } from 'react-dom'
import { Input, Row, Button, Card } from 'react-materialize'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { postReview } from '../../actions/reviews'
import '../../styles/reviewForm.css'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      votes: ''
    }
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const content = this.state.content
    const votes = this.state.votes
    const eventId = this.props.eventId

    this.props.postReview(eventId, content, parseInt(votes))
  }

  render() {
    const showError = this.props.reviews.showError

    return (
      <Card className='review_form'>
        <form>
          <Row >
            <Input onChange={this.onChange} name='content' placeholder="Hi friend, share your review here" s={6} lg={6} />
          </Row>
          <Row>
            <Input onChange={this.onChange} name='votes' type='radio' value='1' label='1' />
            <Input onChange={this.onChange} name='votes' type='radio' value='2' label='2' />
            <Input onChange={this.onChange} name='votes' type='radio' value='3' label='3' />
            <Input onChange={this.onChange} name='votes' type='radio' value='4' label='4' />
            <Input onChange={this.onChange} name='votes' type='radio' value='5' label='5' />
          </Row>
          <Row className='review_phrase'>
            <p>
              <span> * </span> Rating (1 - worst, 5 - best)</p>
          </Row>
          <Row className='reminder'>
            {
              this.props.isLoggedIn
                ? (this.state.content.length > 0 && this.state.votes && <Button onClick={this.onSubmit}>Add Review</Button>)
                : <p>Please log in to review this event</p>
            }
          </Row>
        </form>
      </Card>
    )
  }
}

const mapStateToProps = ({ reviews, auth }) => ({ reviews, isLoggedIn: auth.isLoggedIn })
const mapDispatchToProps = (dispatch) => bindActionCreators({
  postReview
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
