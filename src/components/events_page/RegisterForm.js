
import React, { Component } from 'react';
import { Row, Input, Label, Button } from 'react-materialize'
import { Icon } from 'react-icons-kit'
import { userPlus } from 'react-icons-kit/fa/userPlus'
import events from '../../requests/events'


class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childName: '',
      age: '',
      addedChild: [],
      notes: '',
      finisedBooking: false
    }
  }

  onSubmit = async (e) => {
    e.preventDefault()
    const childName = this.state.childName
    const age = this.state.age

    const payload = await events.registerEvent(this.props.eventId, this.state.notes, this.state.addedChild)
    console.log('payload in registerform on submit', payload)
    this.setState({ childName: '', age: '', finisedBooking: true })
  }

  onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  addChild = () => {
    let childName = this.state.childName
    let childAge = this.state.age

    if (childName && childAge) {
      let joined = this.state.addedChild.concat({ name: childName, age: childAge })
      this.setState({
        addedChild: joined
      })
    }

    this.setState({
      childName: '',
      age: ''
    })
  }

  plyear = (age) => {
    return age > 1 ? `years` : `year`
  }

  render() {
    return (
      <form>
        <p>Who is attending?</p>
        <Row>
          <Input name='childName' label="name" value={this.state.childName} onChange={this.onChange} />
          <Input name='age' type='select' label='age' value={this.state.age} onChange={this.onChange}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </Input>
          <Icon style={{ color: '#B045BA' }} size={25} icon={userPlus} onClick={this.addChild} />
        </Row>
        {this.state.addedChild.length > 0 && this.state.addedChild.map((el, idx) => {
          return <Row style={{ marginBottom: '5px' }} key={idx}>{`${el.name} ${el.age} ${this.plyear(el.age)} old`}</Row>
        })}
        <Row>
          <Input name='notes' label='notes' value={this.state.notes} onChange={this.onChange} />
        </Row>
        {
          this.state.finisedBooking ? <p>Event registered successfully</p> :
            (this.state.addedChild.length > 0 && this.state.notes ?
              <Button onClick={this.onSubmit}>
                Book
            </Button>
              :
              <Button disabled>
                Book
            </Button>)
        }
      </form>
    )
  }
}


export default RegisterForm