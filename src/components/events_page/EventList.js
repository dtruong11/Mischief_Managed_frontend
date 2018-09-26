import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Row,
    Col
} from 'reactstrap'
import EventCard from './EventCard'


import { getEvents } from '../../actions/events'

class EventList extends Component {
    // componentDidMount() {
    //     this.props.getEvents() // action creator 
    // }

    constructor(props) {
        super(props)
    }

    render() {
        console.log('this.props in EventList',this.props)
        return (
        <div>
            {this.props.events.payload.map(event => {
                return <EventCard key={event.id} event={event} favorite={event.favorite} />
            })}
        </div>
        );
    }

}


const mapStateToProps = ({ events, formValues }) => ({ events, formValues })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
