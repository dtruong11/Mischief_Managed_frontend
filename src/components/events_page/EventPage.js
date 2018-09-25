import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import EventList from './EventList'
import FilterForm from './FilterForm'


class EventPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="9">
                        {/* event card component */}
                        <EventList />
                    </Col>
                    <Col lg="3">
                        {/* filter component */}
                        <FilterForm />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventPage