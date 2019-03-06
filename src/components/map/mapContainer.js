import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Map from "./Map";

export class MapContainer extends Component {
  // this is the container for the map, in terms of width heigh and position we should only style this and not the Map component itself
  // this is just for the testing. we'll change it later according to our styling and needs
  render() {
    const style1 = {
      width: "90%",
      height: "100px",
      margin: "auto",
      marginTop: "20px",
      position: "relative"
    };

    if (!this.props.loaded) {
      return <div>...Loading</div>;
    }
    return (
      <div style={style1}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
