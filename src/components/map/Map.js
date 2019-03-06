import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        const { lat, lng } = this.props.initialCenter; // this will be provided by the browser's location 
        this.mapRef = React.createRef(); // this creates a ref that we will use for the map div
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }


    render() {
        return (
            <div ref={this.mapRef}>
                Loading map...
            </div>

        )
    }


}





export default Map;