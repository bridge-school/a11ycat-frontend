import React from "react";

export class Map extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initialCenter; // this will be provided by the browser's location
    this.state = {
      currentLocation: {
        lat,
        lng
      }
    };
  }

  render() {
    // TO DO: remove useThis variable
    const useThis = this.state.lat;

    return <div>Loading map... {useThis}</div>;
  }
}
