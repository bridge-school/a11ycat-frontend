import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RadioScale } from "../form/RadioScale";
import { Button } from "../Button";
import MapContainer from "../map/MapContainer";
import { submitForm } from "../../store/actions/incidentsActions";

class ReportIncident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedInput: "",
      inputOptions: [
        {
          displayEmoji: "😑",
          inputRating: "emojiScale-1"
        },
        {
          displayEmoji: "😟",
          inputRating: "emojiScale-2"
        },
        {
          displayEmoji: "😡",
          inputRating: "emojiScale-3"
        },
        {
          displayEmoji: "😨",
          inputRating: "emojiScale-4"
        },
        {
          displayEmoji: "😱",
          inputRating: "emojiScale-5"
        }
      ]
    };

    this.handleRadioInputChange = this.handleRadioInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioInputChange(e) {
    this.setState({ selectedInput: e.target.value });
  }

  handleSubmit(e) {
    this.props.submitForm(this.state.selectedInput);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <MapContainer addressText="Location to report" view="report" />
          <h3>Please state how you felt when the incident happened </h3>
          <RadioScale
            selectedInput={this.state.selectedInput}
            inputOptions={this.state.inputOptions}
            handleRadioInputChange={this.handleRadioInputChange}
          />
          <button type="submit">Submit Report</button>
        </form>
        <Link to="/view-reports">
          <Button text={"Cancel"} />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitForm
};

export default connect(
  null,
  mapDispatchToProps
)(ReportIncident);
