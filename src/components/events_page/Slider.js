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

class SliderRange extends Component {
    onSliderChange = (value) => {
        this.props.updateForm('age', value)
    }

    handle = (props) => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}>
                <Handle value={value} {...restProps} />
            </Tooltip>
        );
    };
    render() {
        const ageArr = this.props.formValues.age
        console.log('check formValues', this.props.formValues)
        return (
            <div className='Rangecontainer'>
                <div className='sliderAge'>
                    <Range min={0} max={14} defaultValue={[0, 2]} handle={this.handle} onChange={this.onSliderChange} />
                </div>
                <div className='min_age'> {ageArr[0]}</div>
                <div className='empty_age'></div>
                <div className='max_age'>{ageArr[1]}</div>
            </div>
        );
    }
}


const mapStateToProps = ({ formValues }) => ({ formValues })
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ updateForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderRange)