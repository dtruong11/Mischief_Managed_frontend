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
import pic from '../../assets/kidevents.jpg'
import '../../styles/eventPage.css'
import { withRouter } from 'react-router-dom'

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
  }

  componentWillMount = () => {    
    this.props.getEvents() // action creator 
  }

  reRoute = (title, history) => {
    console.log('title inside reRoute', title)
    const fixedTitle = title.split(' ').join('-')

    console.log('fixedTitle',fixedTitle)
    history.push(`/events/${fixedTitle}`)
  }

  render() {
    console.log('this.props.events inside EVELNTLIST', this.props)
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
              {this.props.events.length > 0 ? this.props.events.map(event => {
                return <EventCard key={event.id} onClick={() => this.reRoute(event.title, this.props.history)} event={event} favorite={event.favorite} />
              }) :
                <div className="not_found_text">
                  <img src={pic} className="not_found_events" />
                  Events not Found
                </div>}
            </div>
        }
      </div>
    );
  }

}


const mapStateToProps = ({ events, formValues }) => ({ events: events.all, formValues })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEvents }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventList))
