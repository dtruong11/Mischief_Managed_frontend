import React from 'react';
import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import InfoCard from './InfoCardMap'


const { REACT_APP_API_KEY } = process.env

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_API_KEY}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers 
  (() => ({
    isOpen: {},
  }), {
      onToggleOpen: ({ isOpen }) => (idx) => {
        if (isOpen.hasOwnProperty(idx)) {
          return { isOpen: { ...isOpen, [idx]: !isOpen[idx] } }
        } else {
          return { isOpen: { ...isOpen, [idx]: true } }
        }
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    center={props.formValues.lat ? { lat: parseFloat(props.formValues.lat), lng: parseFloat(props.formValues.long) } : { lat: 47.599239, lng: -122.333805 }}>

    {props.isMarkerShown &&
      props.events.map((event, idx) => {
        const location = { lat: event.lat, lng: event.long }
        return (
          <Marker position={location} key={idx} onClick={() => props.onToggleOpen(idx)}>
            {props.isOpen[idx] &&
              <InfoWindow onCloseClick={() => props.onToggleOpen(idx)}>
                <InfoCard event={event} />
              </InfoWindow>}
          </Marker>
        )
      })
    }
  </GoogleMap>
)


export default Map

