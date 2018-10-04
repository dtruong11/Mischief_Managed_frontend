
import React, { Component } from 'react';
import { Row, Input, Label, Button } from 'react-materialize'


class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childName: '',
      age: '',
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const childName = this.state.childName
    const age = this.state.age

    // const eventId = this.props.eventId
    // this.props.postReview(eventId, content, parseInt(votes))
    this.setState({ childName: '', age: '' })
  }

  render() {
    console.log('the state of the form', this.state)

    return (
      <form>
        <Row>
          <Input name='childName' label="The name of your child" value={this.state.name} />
        </Row>
        <Row>
          <Input name='age' value={this.state.age} />
        </Row>
        {
          this.state.childName && this.state.age ?
            <Button onClick={this.onSubmit}>
              Book
            </Button>
            :
            <Button disabled>
              Book
            </Button>
        }
      </form>
    )
  }
}

export default RegisterForm 