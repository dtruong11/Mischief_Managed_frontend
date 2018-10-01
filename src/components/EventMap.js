import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import InfoCard from './InfoCardMap'


const { REACT_APP_API_KEY } = process.env

const EventMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%`, width: '100%' }} />,
    containerElement: <div style={{ height: `250px`, width: '100%' }} />,
    mapElement: <div style={{ height: `100%`, width: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    center={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}>
    {
      props.isMarkerShown &&
      <Marker position={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}>
      </Marker>
    }
  </GoogleMap>
)


export default EventMap

