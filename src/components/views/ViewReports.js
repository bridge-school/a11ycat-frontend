import React from "react";
import axios from 'axios';
import { connect } from 'react-redux'

import { getCatcallsSuccess } from '../../store/actions'

class ViewReports extends React.Component {
  componentDidMount() {
    axios.get('/catcalls').then(response => {
      this.props.getCatcallsSuccess(response.data.data)
    })
  }

  render() {
    return (
      <div>
        {this.props.catcalls.map((locations, index) =>
          <div key={locations.textLocation + index}>{locations.textLocation}</div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catcalls: state.catcalls
})

const mapDispatchToProps = {
  getCatcallsSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewReports);
