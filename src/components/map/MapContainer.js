import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import { DisplayAddress } from "./DisplayAddress";
import {
  setLatLngAndAddress,
  centerMovedAndAddress
} from "../../store/actions/mapActions";
import { whatToRender } from "./mapRenderMethods";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { google } = this.props;
    this.props.setLatLngAndAddress({ google });
    // const { lat, lng } = this.props.centerMarker;
    // this.props.setAddress({ google, lat, lng });
  }

  render() {
    const style1 = {
      width: "90%",
      height: "400px",
      margin: "auto",
      marginTop: "20px",
      position: "relative"
    };

    if (!this.props.currentLocation.lat) {
      return <div>...Loading</div>;
    }

    return (
      <div style={style1}>
        <DisplayAddress address={this.props.address} />
        {this.props.currentLocation.lat && ( // checking if state is already populated with the current locations
          <Map
            zoom={15}
            google={this.props.google}
            initialCenter={this.props.currentLocation}
            onDragend={(mapProps, map) => {
              const { google } = this.props;
              this.props.centerMovedAndAddress({ map, google });
            }}
          >
            {whatToRender(
              // checks which view the user is currently on and renders the markers on the map accordingly
              this.props.centerMarker,
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
  currentLocation: {
    lat: store.map.currentLocation.lat,
    lng: store.map.currentLocation.lng
  },
  centerMarker: {
    lat: store.map.centerMarker.lat,
    lng: store.map.centerMarker.lng
  },
  address: store.map.address,
  loading: store.map.loading
});

const mapDispatchToProps = {
  setLatLngAndAddress,
  centerMovedAndAddress
};

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  GoogleApiWrapper({
    apiKey: key
  })(MapContainer)
);
