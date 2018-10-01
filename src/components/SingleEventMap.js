import EventMap from './EventMap'
import React, { Component } from 'react';

class SingleEventMapWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMarkerShown: true,
    }
  }

  render() {
    return (
      <EventMap
        isMarkerShown={this.state.isMarkerShown}
        lat={this.props.lat}
        lng={this.props.lng}
      />
    )
  }
}

export default SingleEventMapWrapper