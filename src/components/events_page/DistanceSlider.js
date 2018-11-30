import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component } from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import '../../styles/slider.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { updateForm } from '../../actions/updateForm'

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

class DistanceSliderRange extends Component {
    onSliderChange = (value) => {
       this.props.updateForm('range', value)
    }

    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        // console.log('value', value)
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
        const range = this.props.formValues.range 
        console.log('range in DistanceSlider', range)

        return (
            <div className='Rangecontainer'>
                <div className='sliderAge'>
                    <Slider step={5} min={0} max={20} defaultValue={20} handle={this.handle} onChange={this.onSliderChange} />
                </div>
                <div className='min_age'> 0 </div>
                <div className='empty_age'></div>
                <div className='max_age'>{range} miles</div>
            </div>
        );
    }
}


const mapStateToProps = ({ formValues }) => ({ formValues })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DistanceSliderRange)