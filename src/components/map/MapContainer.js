import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { DisplayAddress } from "./DisplayAddress";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      currentLocation: {
        lat: null,
        lng: null
      }
    };
  }

  //  retrieve the current location of the user from the browser API
  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { coords } = pos;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          },
          centerMarker: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }
    const { google } = this.props;
    const geocoder = new google.maps.Geocoder();
    this.geocodeLatLng(geocoder);
  }

  // get address from lat and lng
  geocodeLatLng(geo) {
    const latlng = {
      lat: this.state.currentLocation.lat,
      lng: this.state.currentLocation.lng
    };
    geo.geocode({ location: latlng }, res => {
      const address = res[0].formatted_address;
      this.setState({ address });
    });
  }

  // updating the state with the new coordinates when the user moves the map
  centerMoved(mapProps, map) {
    const currentCenter = {
      lat: map.getCenter().lat(),
      lng: map.getCenter().lng()
    };

    this.setState({ centerMarker: currentCenter });
  }

  render() {
    const style1 = {
      width: "90%",
      height: "400px",
      margin: "auto",
      marginTop: "20px",
      position: "relative"
    };

    if (!this.state.currentLocation.lat) {
      return <div>...Loading</div>;
    }
    return (
      <div style={style1}>
        <DisplayAddress address={this.state.address} />
        {this.state.currentLocation.lat && ( // checking if state is already populated with the current locations
          <Map
            zoom={15}
            google={this.props.google}
            initialCenter={this.state.currentLocation}
            onDragend={(mapProps, map) => this.centerMoved(mapProps, map)}
          >
            <Marker
              title={'MYCURRENTLOCATION'}
              name={'MYCURRENTLOCATION'}
              position={this.state.centerMarker}
            />

          </Map>
        )}
      </div>
    );
  }
}

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default GoogleApiWrapper({
  apiKey: key
})(MapContainer);
