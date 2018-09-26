import React, { Component } from 'react'
// import { Row, Col, Form } from 'reactstrap';
import { Row, Col, Input } from 'react-materialize'
import SearchBar from './SearchBar'
import SliderRange from './Slider'
import DistanceSliderRange from './DistanceSlider'
import GoogleApi from '../helpers/GoogleApi'
import scriptCache from '../helpers/ScriptCache'
import { Icon } from 'react-icons-kit'
import { angleDown } from 'react-icons-kit/fa/angleDown'


const { REACT_APP_API_KEY } = process.env


class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: '',
            latitude: null,
            longitude: null,
            loaded: false
        };
    }

    componentWillMount() {
        this.scriptCache = scriptCache({
            google: GoogleApi({
                apiKey: REACT_APP_API_KEY,
                libraries: ['places']
            })
        });
    }

    componentDidMount() {
        this.scriptCache.google.onLoad((err, tag) => {
            this.setState({ loaded: true })
            console.log('err', err, 'tag', tag)
        })
    }

    render() {
        return (
            <Row>
                <Col>
                    <form >
                        {this.state.loaded && <SearchBar />}
                        <label><Icon icon={angleDown} /> CATEGORY
                        {/* any input changed: dispatch action => this.props.getEventsByCategory() */}
                            <Input name="sport" type="checkbox" value="sport" label='Sport' />
                            <Input name="arts&Craft" type="checkbox" value="arts&Craft" label='Arts & Craft' />
                            <Input name="educational" type="checkbox" value="educational" label='Educational' />
                            <Input name="nature" type="checkbox" value="nature" label='Nature' />
                            <Input name="music" type="checkbox" value="music" label='Music' />
                        </label>
                        <label> TIMES
                        {/* any input changed: dispatch action => this.props.getEventsByTimes() */}
                            <Input name="morning" type="checkbox" value="morning" label='Morning (before 12PM)' />
                            <Input name="afternoon" type="checkbox" value="afternoon" label='Afternoon (12PM - 4PM)' />
                            <Input name="evening" type="checkbox" value="evening" label='Evening (after 4PM)' />
                        </label>
                        <label> FREE ACTVITIES ONLY
                        {/* input changed: dispatch action => this.props.getFreeEventsOnly(), otherwise all events */}
                                <Input type='switch' name='free' />
                        </label>
                        <div className="switch">
                            <label>
                                <input type="checkbox" />
                                <span className="lever"></span>
                            </label>
                        </div>
                        <label> AGE
                        {/* Input changed: dispatch action => this.props.getEventsByAgeRange() */}
                            <SliderRange />
                        </label>
                        <label> DISTANCE
                        {/* Input changed: dispatch action => this.props.getEventsByDistance() */}
                            <DistanceSliderRange />
                        </label>
                    </form>
                </Col>
            </Row>
        )
    }
}

export default FilterForm