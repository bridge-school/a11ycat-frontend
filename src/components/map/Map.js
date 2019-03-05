import React from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        const { lat, lng } = this.props.initialCenter; // this will be provided by the browser's location 
        this.state = {
            currentLocation: {
                lat: lat,
                lng: lng
            }
        }
    }


    render() {
        return (
            <div>
                Loading map...
            </div>

        )
    }


}





export default Map;