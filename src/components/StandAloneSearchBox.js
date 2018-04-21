import React, { Component } from 'react';
import _ from 'lodash';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import store from '../redux/store';
import { addLocation } from '../redux/actions';


class PlacesWithStandaloneSearchBox extends Component {
  constructor() {
    super();
    this.state = {
      places: [],
      searchBox: null
    }
  }

  onSearchBoxMounted(ref) {
    if (this.state.searchBox != null)
      return;
    this.setState({ searchBox: ref });
  }

  onPlacesChanged() {
    const places = this.state.searchBox.getPlaces();
    this.setState({
      places
    });
  }

  addLocation() {
    store.dispatch(addLocation(this.state.places[0]))
  }

  render() {
    let state = this.state;
    return (
      <div dta-stanadalone-searchbox="">
        <StandaloneSearchBox
          ref={this.onSearchBoxMounted.bind(this)}
          bounds={this.state.bounds}
          onPlacesChanged={this.onPlacesChanged.bind(this)}
        >
          <input
            type="text"
            placeholder="חפש מיקום"
            style={style.input}
          />
        </StandaloneSearchBox>
        <ol>
          {state.places.map(({ photos, place_id, formatted_address, geometry: { location } }) =>
            <li key={place_id}>
              {formatted_address}
              {' at: '}
              ({location.lat()}, {location.lng()})
                        </li>
          )}
        </ol>
        <button onClick={this.addLocation.bind(this)}>add location</button>

      </div>
    )
  }
}

export default PlacesWithStandaloneSearchBox;

const style = {
  input: {
    boxSizing: 'border-box',
    border: '1px solid transparent',
    width: '240px',
    height: '32px',
    padding: '0 12px',
    borderRadius: '3px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
    fontSize: '14px',
    outline: 'none',
    textOverflow: 'ellipses',
  }

};