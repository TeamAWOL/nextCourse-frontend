
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import '../css/MapContainer.css'

export class MapContainer extends React.Component {

  render() {
    return (
        <Map
           google={this.props.google}
           initialCenter={{
                            lat: this.props.lat,
                            lng: this.props.lng
                          }}
           zoom={15}
           onClick={this.onMapClicked}
         >
         <Marker onClick={this.onMarkerClick} name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>

              </div>
          </InfoWindow>
       </Map>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAg0zVtqreMAzsqA-BOqdYvtAvsvCmKJWw'
})(MapContainer)
