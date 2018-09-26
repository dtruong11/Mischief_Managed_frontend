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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { updateForm } from '../../actions/updateForm'

const { REACT_APP_API_KEY } = process.env


class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            console.log('err in scriptCache filterFrom.js')
        })
    }

    handleCheckBox = event => {
            return this.props.updateForm(event.target.name, !JSON.parse(event.target.value))
    };

    render() {
        console.log('this.props.formValues',this.props.formValues)
        const { sport, arts, educational, nature, music, morning, afternoon, evening, freeOnly } = this.props.formValues
        return (
            <Row>
                <Col>
                    <form >
                        {this.state.loaded && 
                            <SearchBar />
                        }
                        <label><Icon icon={angleDown} /> CATEGORY
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="sport" type="checkbox" value={JSON.stringify(sport)} label='Sport' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="arts" type="checkbox" value={JSON.stringify(arts)} label='Arts & Craft' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="educational" type="checkbox" value={JSON.stringify(educational)} label='Educational' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="nature" type="checkbox" value={JSON.stringify(nature)} label='Nature' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="music" type="checkbox" value={JSON.stringify(music)} label='Music' />
                        </label>
                        <label> TIMES
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="morning" type="checkbox" value={JSON.stringify(morning)} label='Morning (before 12PM)' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="afternoon" type="checkbox" value={JSON.stringify(afternoon)} label='Afternoon (12PM - 4PM)' />
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="evening" type="checkbox" value={JSON.stringify(evening)} label='Evening (after 4PM)' />
                        </label>
                        <label> FREE ACTVITIES ONLY
                            <Input onChange={(event) => {this.handleCheckBox(event)}} name="freeOnly" type="checkbox" value={JSON.stringify(freeOnly)} label='All free' />
                        </label>
                        <label> AGE
                            <SliderRange />
                        </label>
                        <label> DISTANCE
                            <DistanceSliderRange />
                        </label>
                    </form>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ formValues }) => ({ formValues })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm)

