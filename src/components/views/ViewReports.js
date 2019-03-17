import React from "react";
import { connect } from "react-redux";

import { getIncidents } from "../../store/actions/incidentsActions";

class ViewReports extends React.Component {
  componentDidMount() {
    this.props.getIncidents();
  }

  render() {
    return (
      <div>
        {this.props.incidents.map((locations, index) => (
          <div key={locations.textLocation + index}>
            {locations.textLocation}
          </div>
        ))}
      </div>
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
