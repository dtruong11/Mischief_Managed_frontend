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
    componentDidMount() {
        this.props.getEvents() // action creator 
    }
    render() {
        console.log('this.props in EventList',this.props)
        const Events = this.props.events.payload.map(event => {
            return <EventCard key={event.id} event={event} favorite={event.favorite} />
        })
        return ({ Events })
    }

}


const mapStateToProps = ({ events }) => ({ events })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)