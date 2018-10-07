import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row, Col, Modal
} from 'react-materialize'
import { getEventsByOrg } from '../../actions/eventsByOrg'
import { withRouter } from 'react-router-dom'
import OrgEventCard from './OrgEventCard'
import pic from '../../assets/kidevents.jpg'
import '../../styles/orgEventList.css'


class OrgEventList extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount = () => {
    this.props.getEventsByOrg()
  }

  // reRoute = (title, history) => {
  //   const fixedTitle = title.split(' ').join('-')
  //   history.push(`/events/${fixedTitle}`)
  // }

  render() {
    console.log('this.props.events YAYYY LOOK', this.props.events[0])
    return (
      <div>
        {
          this.props.isLoading ?
            <div> </div>
            :
            <div>
              {this.props.events.length > 0 ?
                <div className='all_events'>
                  {this.props.events.map(event => {
                    return (
                      <OrgEventCard key={event.id} event={event} favorite={event.favorite} />
                    )
                  })}
                </div>
                :
                <div className="not_found_text">
                  <img src={pic} className="not_found_events" />
                  <p>Events not Found</p>
                </div>}
            </div>
        }
      </div>
    );
  }

}


const mapStateToProps = ({ eventsByOrg }) => ({ events: eventsByOrg.all, isLoading: eventsByOrg.isLoading })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEventsByOrg }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrgEventList))
