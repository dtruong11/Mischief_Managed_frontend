import { Row, Col } from 'react-materialize'
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import '../../styles/slider.css'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class SliderRange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: []
        }
    }


    onSliderChange = (value) => {
        console.log('value inside onSliderChange', value)
        this.setState({
            value
        })
    }

    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        console.log('value', value)
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </Tooltip>
        );
    };
    render() {
        return (
            <div className='Rangecontainer'>
                <div className='sliderAge'>
                    <Range min={0} max={14} defaultValue={[0, 2]} handle={this.handle} onChange={this.onSliderChange} />
                </div>
                <div className='min_age'> {this.state.value[0]}</div>
                <div className='empty_age'></div>
                <div className='max_age'>{this.state.value[1]}</div>
            </div>
        );
    }
}

export default SliderRange;
