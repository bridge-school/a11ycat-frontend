import React, { Component } from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
import { connect } from "react-redux";
import { DisplayAddress } from "./DisplayAddress";
import {
  setLatLngAndAddress,
  centerMovedAndAddress
} from "../../store/actions/mapActions";
import { renderReportIncident, renderViewReports } from "./mapRenderMethods";
import { Loading } from "../Loading";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //  retrieve the current location of the user from the browser API
  componentDidMount() {
    const { google } = this.props;
    this.props.setLatLngAndAddress({ google });
  }

  render() {
    const style1 = {
      width: "90%",
      height: "400px",
      margin: "auto",
      marginTop: "20px",
      position: "relative"
    };

    return (
      <div style={style1}>
        <DisplayAddress
          address={this.props.address}
          addressText={this.props.addressText}
        />
        {this.props.loading ? (
          <Loading />
        ) : (
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
            {this.props.view === "report"
              ? renderReportIncident(this.props.centerMarker)
              : renderViewReports(this.props.incidents)}
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
  pathname: store.router.location.pathname
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
