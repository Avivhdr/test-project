/*global google*/
import React from 'react';
import PropTypes from 'prop-types';
// import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle, InfoWindow } from 'react-google-maps';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';
import DrawingManager from 'react-google-maps/lib/components/drawing/DrawingManager';
const FaAnchor = require('react-icons/lib/fa/child');
// const { SearchBox } = require('react-google-maps/lib/components/places/SearchBox');

// let styles = [
//   {
//     'featureType': 'all',
//     'stylers': [
//       { 'color': '#C0C0C0' }
//     ]
//   }, {
//     'featureType': 'road.arterial',
//     'elementType': 'geometry',
//     'stylers': [
//       { 'color': '#CCFFFF' }
//     ]
//   }
//   , {
//     'featureType': 'landscape',
//     'elementType': 'labels',
//     'stylers': [
//       { 'visibility': 'off' }
//     ]
//   }
// ];

export let mapOptions = {
  // styles: styles,// change styles to all elements of the map  
  backgroundColor: 'black',
  center: { lat: 32.077502, lng: 34.7844196 },
  clickableIcons: true,
  keyboardShortcuts: true,
  draggable: true,
  // draggableCursor: 'url(https://photos.focusdepart.com/img/missingwalk.png), auto;'
  // draggingCursor: 'url(https://www.shareicon.net/data/128x128/2015/09/23/645381_running_512x512.png), auto;',
  gestureHandling: 'auto',//use ctrl
  tilt: 45,// 0 or 45 - tilt to 45 degress when possible (close zoom)
  zoom: 15,
  mapTypeId: 'satellite', //initial type
  maxZoom: 20,
  minZoom: 0,

  // controllers
  fullscreenControl: true,
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: ['roadmap', 'hybrid', 'satellite', 'terrain'],
    position: google.maps.ControlPosition.TOP_RIGHT,
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
  },
  streetViewControl: true,//show the pegman
  streetViewControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT },
  zoomControl: true,
  zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT }

  // DONT KNOW:
  // heading: 0,//?
  // noClear: false,

  // DONT WORK & don't know (maybe mobile):
  // panControl: true,
  // panControlOptions: { position: google.maps.ControlPosition.BOTTOM_LEFT },
  // rotateControl: true,
  // rotateControlOptions: { position: google.maps.ControlPosition.BOTTOM_LEFT },
  // scaleControl: true,
  // scaleControlOptions:  { position: google.maps.ControlPosition.TOP_LEFT },
  // scrollwheel: true,//recommended to use gestureHandling,
  // streetView: ?
};
let circleOptions = {
  center: { lat: 32.070519945081294, lng: 34.786865774621546 },
  clickable: true,
  fillColor: 'green',
  fillOpacity: 0.5,
  strokeColor: 'red',
  editable: true,
  strokeOpacity: 0.8,
  strokePosition: google.maps.StrokePosition.OUTSIDE,
  strokeWeight: 5,
  Visible: true,
  zIndex: 20
};

class Map extends React.PureComponent {

  static propTypes = {
    onToggleOpen: PropTypes.func,
    isOpen: PropTypes.bool,
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

  onDragEnd() {
    console.log(JSON.stringify(this.state.map.getCenter()));
  }

  render() {
    return (
      <GoogleMap
        ref={this.mapLoaded.bind(this)}
        options={mapOptions}
        onDragEnd={this.onDragEnd.bind(this)}
      >
        <InfoBox
          defaultPosition={new google.maps.LatLng(32.08670149769721, 34.7905135788818)}
          options={{ closeBoxURL: '', enableEventPropagation: true }} >
          <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: '12px' }}>
            <div style={{ fontSize: '16px', fontColor: '#08233B' }}>
              כיכר המדינה!
            </div>
          </div>
        </InfoBox>
        <Marker
          defaultPosition={new google.maps.LatLng(32.074883791888894, 34.7754932083984)}
          onClick={this.props.onToggleOpen}
        >
          {this.props.isOpen &&
            <InfoWindow onCloseClick={this.props.onToggleOpen}>
              <div>
                <FaAnchor />
                Hello!
              </div>
            </InfoWindow>
          }
        </Marker>
        <Circle
          // center={{lat: 32.070519945081294, lng: 34.786865774621546}}
          radius={250}
          onRightClick={() => { console.log('Right Click Circle'); }}
          options={circleOptions}
        />
        <DrawingManager
          defaultOptions={
            {
              drawingControl: true,
              drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                drawingModes: [
                  google.maps.drawing.OverlayType.CIRCLE,
                  google.maps.drawing.OverlayType.POLYGON,
                  google.maps.drawing.OverlayType.POLYLINE,
                  google.maps.drawing.OverlayType.RECTANGLE,
                ],
              },
              circleOptions: {
                fillColor: '#ffff00',
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: false,
                editable: true,
                zIndex: 1,
              },
            }
          }
        />
      </GoogleMap>
    );
  }
}

export default withGoogleMap(Map);