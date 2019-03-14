import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import { DisplayAddress } from "./DisplayAddress";
import { whatToRender } from "./mapRenderMethods";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      currentLocation: {
        lat: null,
        lng: null
      },
      latLngArray: [
        {
          key: "1",
          coords: {
            lat: 44,
            lng: -79
          }
        },
        {
          key: "2",
          coords: {
            lat: 43.38475,
            lng: -79.83744
          }
        },
        {
          key: "3",
          coords: {
            lat: 43.39475,
            lng: -79.8544
          }
        },
        {
          key: "4",
          coords: {
            lat: 43.36475,
            lng: -79.81744
          }
        }
      ],
      currentView: "reportIncident" // hard corded for testing purporses. change to 'reportIncident' or 'viewReports'
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
            {whatToRender(
              // checks which view the user is currently on and renders the markers on the map accordingly
              this.state.centerMarker,
              this.state.currentView,
              this.state.latLngArray
            )}
          </Map>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  lat: store.map.currentLocation.lat,
  lng: store.map.currentLocation.lng,
  address: store.map.currentLocation.address,
  loading: store.map.loading
});

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: key
  })(MapContainer)
);
