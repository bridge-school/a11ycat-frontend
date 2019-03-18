import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import { DisplayAddress } from "./DisplayAddress";
import {
  setLatLngAndAddress,
  centerMovedAndAddress
} from "../../store/actions/mapActions";
import { getIncidents } from "../../store/actions/incidentsActions";
import { whatToRender } from "./mapRenderMethods";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "viewReports" // hard corded for testing purporses. change to 'reportIncident' or 'viewReports'
    };
  }

  //  retrieve the current location of the user from the browser API
  componentDidMount() {
    const { google } = this.props;
    this.props.setLatLngAndAddress({ google });
    this.props.getIncidents();
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
            center={this.props.centerMarker}
            onDragend={(mapProps, map) => {
              const { google } = this.props;
              this.props.centerMovedAndAddress({ map, google });
            }}
          >
            {whatToRender(
              // checks which view the user is currently on and renders the markers on the map accordingly
              this.props.centerMarker,
              this.props.pathname,
              this.props.incidents
            )}
          </Map>
        )}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  currentLocation: store.map.currentLocation,
  centerMarker: store.map.centerMarker,
  address: store.map.address,
  loading: store.map.loading,
  incidents: store.incidents.incidents,
  pathname: store.router.location.pathname
});

const mapDispatchToProps = {
  setLatLngAndAddress,
  centerMovedAndAddress,
  getIncidents
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
