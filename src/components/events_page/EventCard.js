import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'net';


const mapStateToProps = ({ events }) => ({ events })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEvents })
}

class EventCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorite: false
        }
    }

    componentDidMount() {
        this.props.getEvents() // action creator 
    }


    render() {
        // get events 
        // const allEvents = this.props.events
        // Single event 
        console.log(this.props)
        return (
            <Row className="mt-3">
                <Col lg="4">
                <img src={}></img>
                </Col>
                <Col lg="8">
                
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCard)