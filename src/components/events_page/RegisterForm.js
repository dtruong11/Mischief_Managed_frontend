
import React, { Component } from 'react';
import { Row, Input, Label, Button } from 'react-materialize'
import { arrows_circle_plus } from 'react-icons-kit/linea/arrows_circle_plus'
import { Icon } from 'react-icons-kit'
import { userPlus } from 'react-icons-kit/fa/userPlus'
import { plusCircle } from 'react-icons-kit/fa/plusCircle'


class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      childName: '',
      age: '',
      addedChild: [],
      notes: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const childName = this.state.childName
    const age = this.state.age

    this.setState({ childName: '', age: '' })
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
      console.log('this.state.addedChild', this.state.addedChild)
      let joined = this.state.addedChild.concat({ name: childName, age: childAge })
      this.setState({
        addedChild: joined
      })
      console.log('after adding child', this.state)
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
    console.log('inside render ', this.state)
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

        {/* <Row>
          <div>
            <Icon size={18} icon={plusCircle} style={{ color: '#B045BA' }} /><span> Add child</span>
          </div>
        </Row> */}
        <Row>
          <Input name='notes' label='notes' value={this.state.notes} />
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