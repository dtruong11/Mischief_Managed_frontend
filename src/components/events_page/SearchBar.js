import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { classnames } from '../helpers/autocomplete';
import '../../styles/eventPage.css'
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      errorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
    };
  }


  handleChange = address => {
    this.setState({
      address,
      latitude: null,
      longitude: null,
      errorMessage: '',
    });
  };

  handleSelect = selected => {
    console.log('selected', selected)
    this.setState({ isGeocoding: true, address: selected });

    geocodeByAddress(selected)
      .then(res => getLatLng(res[0]))
      .then(({ lat, lng }) => {
        // call backend: dispatch => search events based on location 
        // ** this.props.getEventsByLocation({ lat, lng }) ** 
        this.setState({
          latitude: lat,
          longitude: lng,
          isGeocoding: false,
        });
      })
      .catch(error => {
        this.setState({ isGeocoding: false });
      });
  };

  handleCloseClick = () => {
    this.setState({
      address: '',
      latitude: null,
      longitude: null,
    });
  };

  handleError = (status, clearSuggestions) => {
    // console.log('Error from Google Maps API', status); // eslint-disable-line no-console
    this.setState({ errorMessage: status }, () => {
      clearSuggestions();
    });
  };

  render() {
    const {
      address,
      errorMessage,
      latitude,
      longitude,
      isGeocoding,
    } = this.state;

    console.log('this.state.latitude', latitude, 'this.state.longitude', longitude)
    return (
      <div>
        <PlacesAutocomplete
          onChange={this.handleChange}
          value={address}
          onSelect={this.handleSelect}
          onError={this.handleError}
          shouldFetchSuggestions={address.length > 2}
          highlightFirstSuggestion={true}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => {
            return (
              <div className="Demo__search-bar-container">
                <FormGroup className="Demo__search-input-container">
                  <Label for="search">LOCATION</Label>
                  <Input
                    {...getInputProps({
                      placeholder: 'Search Places...',
                      className: 'Demo__search-input',
                    })}
                  />
                  {this.state.address.length > 0 && (
                    <Button
                      className="Demo__clear-button"
                      onClick={this.handleCloseClick}
                    >
                      x
                    </Button>
                  )}
                </FormGroup>
                {suggestions.length > 0 && (
                  <div className="Demo__autocomplete-container">
                    {suggestions.map(suggestion => {
                      const className = classnames('Demo__suggestion-item', {
                        'Demo__suggestion-item--active': suggestion.active,
                      });

                      return (
                        /* eslint-disable react/jsx-key */
                        <div
                          {...getSuggestionItemProps(suggestion, { className })}
                        >
                          <strong>
                            {suggestion.formattedSuggestion.mainText}
                          </strong>{' '}
                          <small>
                            {suggestion.formattedSuggestion.secondaryText}
                          </small>
                        </div>
                      );
                      /* eslint-enable react/jsx-key */
                    })}
                    <div className="Demo__dropdown-footer">
                      <div>
                        {/* <img
                          src={require('../images/powered_by_google_default.png')}
                          className="Demo__dropdown-footer-image"
                        /> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          }}
        </PlacesAutocomplete>
        {errorMessage.length > 0 && (
          <div className="Demo__error-message">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

// const mapDispatchToProps = (dipsatch) => bindActionCreators({
//   getEventsByLocation
// }, dispatch)


// export default connect(null, mapDispatchToProps)(SearchBar);

export default SearchBar