import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment'
import EventCard from './EventCard'
import { ScaleLoader } from 'react-spinners';
import { css } from 'react-emotion';
import { getEvents } from '../../actions/events'
import pic from '../../assets/kidevents.jpg'
import { withRouter } from 'react-router-dom'
import '../../styles/eventPage.css'

const override = css`
  border-color: red;
  text-align: center;
  padding-top: 50px;
`;

class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: true
    }
  }

  componentWillMount = () => {
    setTimeout(() => this.setState({ isLoaded: false }), 2850); // do your async call
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
          this.state.isLoaded ?
            <div className='sweet-loading'>
              <ScaleLoader
                className={override}
                sizeUnit={"px"}
                size={125}
                color={'#EE6559'}
                loading={this.state.isLoaded}
              />
            </div>
            :
            <div>
              {
                this.checkEvents(this.props.events)
              }
            </div>
        }
      </div>
    );
  }

}


const mapStateToProps = ({ events, formValues }) => ({
  events: events.all,
  formValues,
  isLoading: events.isLoading
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEvents }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventList))
