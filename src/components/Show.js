/*global google*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../redux/store';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, InfoWindow } from 'react-google-maps';
import { mapOptions } from './map';


class Show extends Component {

  static propTypes = {
    onToggleOpen: PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      map: null
    };
  }

  mapLoaded(map) {
    if (this.state.map != null)
      return;
    this.setState({ map: map });
  }

  render() {
    let locations = store.getState().locations;
    const locationItems = locations.map((item, index) =>
      <Marker key={index}
        position={new google.maps.LatLng(item.geometry.location.lat(), item.geometry.location.lng())}
        onClick={this.props.onToggleOpen}
      >
        <InfoWindow onCloseClick={this.props.onToggleOpen}>
          <div>
            {item.formatted_address}
          </div>
        </InfoWindow>
      </Marker>
    );

    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        options={mapOptions}
      >
        {/* <InfoBox
                defaultPosition={new google.maps.LatLng(32.08670149769721, 34.7905135788818)}
                options={{ closeBoxURL: ``, enableEventPropagation: true }} >
                    <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                        כיכר המדינה!
                        </div>
                    </div>
                </InfoBox> */}
        {locationItems}
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Show);