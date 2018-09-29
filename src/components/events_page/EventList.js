import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col
} from 'react-materialize'
import EventCard from './EventCard'
import { ClipLoader } from 'react-spinners';
import { css } from 'react-emotion';
import { getEvents } from '../../actions/events'

const override = css`
    display: flex;
    margin: 0 auto;
    justifycontent: center;
    border-color: red;
    text-align: center;
`;




class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSpinner: false
    }
  }

  componentWillMount = () => {
    this.props.getEvents() // action creator 
    setTimeout(() => {
      this.setState({
        showSpinner: true
      })
    }, 200)
  }

  render() {
    console.log('this.props.events inside EVELNTLIST', this.props.events)
    return (
      <div>

        {
          this.props.events.isLoading ?
            <div className='sweet-loading'>
              <ClipLoader
                className={override}
                sizeUnit={"px"}
                size={100}
                color={'#123abc'}
                loading={this.props.events.isLoading}
              />
            </div>
            :
            <div>
              {this.props.events.payload.map(event => {
                return <EventCard key={event.id} event={event} favorite={event.favorite} />
              })}
            </div>
        }
      </div>
    );
  }

}


const mapStateToProps = ({ events, formValues }) => ({ events, formValues })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
