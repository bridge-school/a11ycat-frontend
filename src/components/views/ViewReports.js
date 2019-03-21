import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import { getIncidents } from "../../store/actions/incidentsActions";
import MapContainer from "../map/MapContainer";

const MapWrapper = Styled.div`
	width: 100%;
	height:600px;
	border: 1px solid green;
`;

class ViewReports extends React.Component {
  componentDidMount() {
    this.props.getIncidents();
  }

  render() {
    return (
      <MapWrapper>
        <MapContainer
          incidents={this.props.incidents}
          addressText="Previously reported incidents surrounding"
        />
      </MapWrapper>
    );
  }
}

const mapStateToProps = store => ({
  incidents: store.incidents.incidents
});

const mapDispatchToProps = {
  getIncidents
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewReports);
