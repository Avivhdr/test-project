import React, { Component } from 'react';

const _ = require('lodash');
// const { compose, withProps, lifecycle } = require('recompose');
const {
  // withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} = require('react-google-maps');
const { SearchBox } = require('react-google-maps/lib/components/places/SearchBox');


class MapWithASearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounds: null,
      center: {
        lat: 14.0093300,
        lng: 120.9962000
      },
      markers: [],
      map: null,
      searchBox: null
    };
  }

  onMapMounted(ref) {
    if (this.state.map != null)
      return;
    this.setState({ map: ref });
  }

  onBoundsChanged() {
    this.setState({
      bounds: this.state.map.getBounds(),
      center: this.state.map.getCenter(),
    });
  }

  onSearchBoxMounted(ref) {

    if (this.state.searchBox != null)
      return;
    this.setState({ searchBox: ref });
  }

  onPlacesChanged() {
    const places = this.state.searchBox.getPlaces();
    const bounds = this.state.searchBox.getBounds();
    // const bounds = new google.maps.LatLngBounds();

    places.forEach(place => {
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    const nextMarkers = places.map(place => ({
      position: place.geometry.location,
    }));
    const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

    this.setState({
      center: nextCenter,
      markers: nextMarkers,
    });
    // refs.map.fitBounds(bounds);
  }

  // componentWillMount() {
  //     const refs = {}
  //   }

  render() {
    let markers = JSON.stringify(this.state.markers);
    return (
      <div>
        {markers}
        <GoogleMap
          ref={this.onMapMounted.bind(this)}
          defaultZoom={20}
          center={this.state.center}
          onBoundsChanged={this.onBoundsChanged.bind(this)}
          mapTypeId={'satellite'}
        >
          <SearchBox
            // controlPosition={google.maps.ControlPosition.BOTTOM_LEFT}//not working
            ref={this.onSearchBoxMounted.bind(this)}
            bounds={this.state.bounds}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={this.onPlacesChanged.bind(this)}
          >
            <input
              type="text"
              placeholder="חפש מיקום"
              style={{
                boxSizing: 'border-box',
                border: '1px solid transparent',
                width: '240px',
                height: '32px',
                marginTop: '27px',
                padding: '0 12px',
                borderRadius: '3px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                fontSize: '14px',
                outline: 'none',
                textOverflow: 'ellipses',
              }}
            />
          </SearchBox>
          {this.state.markers.map((marker, index) =>
            <Marker key={index} position={marker.position} />
          )}
        </GoogleMap>
      </div>
    );
  }
}

export default withGoogleMap(MapWithASearchBox);
