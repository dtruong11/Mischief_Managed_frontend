import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import EventList from "./EventList";
import FilterForm from "./FilterForm";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/events'
import '../../styles/eventPage.css'


class EventPage extends Component {

  componentWillMount = () => {
    this.props.getEvents() // action creator 
  }
  componentDidMount = () => {
    console.log("componentdidMount, this.props.events",this.props.events)
  };



  render() {
 
    return (
      <Container style={{marginTop: '50px'}}>
        <Row className='list_map'>
          <Col lg='5'></Col>
          <Col>List View</Col>
          <Col>Map View</Col>
          <Col lg='5'></Col>
        </Row>
        <Row>
          <Col lg="9">
            <EventList events={this.props.events} />
          </Col>
          <Col lg="3">
            <FilterForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)