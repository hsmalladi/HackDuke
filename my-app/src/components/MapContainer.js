import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '60%',
  height: '60%'
};

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 47.444,
            lng: -122.176
          }
        }
      >
		<Marker position={{ lat: 48.00, lng: -122.00}} />
	  </Map>

    );
  }
}


export default GoogleApiWrapper({
  apiKey: process.env.API_KEY
})(MapContainer);