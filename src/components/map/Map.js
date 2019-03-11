import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(); // this creates a ref that we will use for the map div
    this.state = {
      currentLocation: {
        lat: null,
        lng: null
      }
    };
  }

  /* short explanation about how this workers
      Component did mount uses browser’s location api to get the current coordinates of the user and saves them in state. 
      Then calls load map which creates the map in the div we specify using a ref, 
      it receives an object with lat and lng of the user’s current location to know what to centre around and a zoom. 
      component did update checks if anything changed in the google map/ user's location and calls load map or re-center accordingly
      recenter map does just that, recenters the map
      */

  componentDidMount() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const { coords } = pos;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      });
    }
    this.loadMap();
  }

  loadMap() {
    const { google } = this.props;
    const { maps } = google;
    // this node will indicate for the map in which div it should render
    const node = this.mapRef.current;
    const { lat, lng } = this.state.currentLocation;
    const zoom = 14;
    // centers the map around the current location that was retreived from state
    const center = new maps.LatLng(lat, lng);
    // map config is the object the map is expecting to receive in order to render.
    // it receives the center we provided above and the zoom (which we can keep static as it currently is, or make dynamic and pass it down as a prop)
    const mapConfig = Object.assign(
      {},
      {
        center,
        zoom
      }
    );
    // map receives the reference to the div where it should render + the object of what to center and zoom on
    this.map = new maps.Map(node, mapConfig);
  }

  componentDidUpdate(prevProps, prevState) {
    // checks if any of the props it received from google changed and reloads the map
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    // checked if the current location of the user has changed
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const { map } = this;
    const curr = this.state.currentLocation;
    const { google } = this.props;
    const { maps } = google;

    if (map) {
      const center = new maps.LatLng(curr.lat, curr.lng);
      map.panTo(center);
    }
  }

  render() {
    return (
      <div style={{ height: "300px" }} ref={this.mapRef}>
        Loading map...
      </div>
    );
  }
}

export default Map;
