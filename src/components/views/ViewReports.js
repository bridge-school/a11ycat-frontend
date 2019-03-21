import React from "react";
import { connect } from "react-redux";
import { getIncidents } from "../../store/actions/incidentsActions";
import MapContainer from "../map/MapContainer";

class ViewReports extends React.Component {
  componentDidMount() {
    this.props.getIncidents();
  }

  render() {
    return (
      <MapContainer
        incidents={this.props.incidents}
        addressText="Previously reported incidents surrounding"
        view="views"
      />
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
