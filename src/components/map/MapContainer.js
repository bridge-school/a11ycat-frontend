import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { connect } from "react-redux";
import { DisplayAddress } from "./DisplayAddress";
import { setAddress, setLatLng } from "../../store/actions/mapActions";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 43.6532,
        lng: -79.3832
      }
    };
  }

  //  retrieve the current location of the user from the browser API
  componentDidMount() {
    this.props.setLatLng();
    const { google } = this.props;
    const { lat, lng } = this.state.currentLocation;
    this.props.setAddress({ google, lat, lng });
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
        <DisplayAddress address={this.props.address} />
        {this.state.currentLocation.lat && ( // checking if state is already populated with the current locations
          <Map
            zoom={15}
            google={this.props.google}
            initialCenter={this.state.currentLocation}
            onDragend={(mapProps, map) => this.centerMoved(mapProps, map)}
          >
            <Marker
              title={"MYCURRENTLOCATION"}
              name={"MYCURRENTLOCATION"}
              position={this.state.centerMarker}
            />
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

const mapDispatchToProps = {
  setLatLng,
  setAddress
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
