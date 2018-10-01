import Map from './Map'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/events'
import { connect } from 'react-redux';

class MapWrapper extends Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
    this.props.getEvents()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 1000)
  }


  render() {
    return (
      <Map
        isMarkerShown={this.state.isMarkerShown}
        formValues={this.props.formValues}
        events={this.props.events}
      />
    )
  }
}

const mapStateToProps = ({ events, formValues }) => ({ events, formValues })
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)