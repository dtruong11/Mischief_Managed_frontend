import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {
//   Row,
//   Col
// } from 'react-materialize'
import moment from 'moment'
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

  reRoute = (id, history) => {
    history.push(`/events/${id}`)
  }

  sortDate = (events) => {
    let sorted = events.sort((left, right) => {
      return moment.utc(left.start_date).diff(moment.utc(right.start_date))
    })
    return sorted 
  }

  checkEvents = (events) => {
    if (events.length > 0) {
      let sorted = this.sortDate(events)
      return sorted.map(event => {
        return <EventCard key={event.event_id} onClick={() => this.reRoute(event.event_id, this.props.history)} event={event} favorite={event.favorite} />
      })
    } else {
      return (
      <div className="not_found_text">
        <img src={pic} className="not_found_events" /> Events not Found
      </div>)
    }
  }
  render() {
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
              {
                this.checkEvents(this.props.events)
              }
              {
                //   this.props.events.length > 0 ? this.props.events.map(event => {
                //   return <EventCard key={event.event_id} onClick={() => this.reRoute(event.event_id, this.props.history)} event={event} favorite={event.favorite} />
                // }) :
                //   <div className="not_found_text">
                //     <img src={pic} className="not_found_events" />
                //     Events not Found
                //   </div>
              }
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
