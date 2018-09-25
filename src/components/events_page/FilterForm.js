import React, { Component } from 'react'
// import { Row, Col, Form } from 'reactstrap';
import { Row, Col, Input } from 'react-materialize'
import SearchBar from './SearchBar'
import SliderRange from './Slider'
import GoogleApi from '../helpers/GoogleApi'
import scriptCache from '../helpers/ScriptCache'
import { Icon } from 'react-icons-kit'
import { angleDown } from 'react-icons-kit/fa/angleDown'


const { REACT_APP_API_KEY } = process.env


class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            errorMessage: '',
            latitude: null,
            longitude: null,
            loaded: false,
            categoryExpanded: false
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
                            <Input name="sport" type="checkbox" value="sport" label='Sport' />
                            <Input name="arts&Craft" type="checkbox" value="arts&Craft" label='Arts & Craft' />
                            <Input name="educational" type="checkbox" value="educational" label='Educational' />
                            <Input name="nature" type="checkbox" value="nature" label='Nature' />
                            <Input name="music" type="checkbox" value="music" label='Music' />
                        </label>
                        <label> TIMES
                            <Input name="morning" type="checkbox" value="morning" label='Morning' />
                            <Input name="afternoon" type="checkbox" value="afternoon" label='Afternoon' />
                            <Input name="evening" type="checkbox" value="evening" label='Evening' />
                        </label>
                        <div> FREE ACTVITIES ONLY
                            <Row>
                                <Input type='switch' name='free' />
                                {/* <input type="checkbox" />
                                <span className="slider round"></span> */}
                            </Row>
                        </div>
                        <label> AGE </label>

                        <SliderRange />
                   

                    </form>
                </Col>
            </Row>
        )
    }
}

export default FilterForm