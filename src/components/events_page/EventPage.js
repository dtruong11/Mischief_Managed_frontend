import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';

class EventPage extends Component {


    render() {
        return (
            <Container>
                <Row>
                    <Col lg="9">
                        {/* event card component */}
                        <Row></Row>
                    </Col>
                    <Col lg="3">
                        {/* filter component */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EventPage