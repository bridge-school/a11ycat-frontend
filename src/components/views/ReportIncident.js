import React, { Component } from "react";
import { Link } from "react-router-dom";
import { RadioScale } from "../form/RadioScale";
import { Button } from "../Button";
import MapContainer from "../map/MapContainer";

export class ReportIncident extends Component {
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
  }

  handleRadioInputChange(e) {
    this.setState({ selectedInput: e.target.value });
  }

  render() {
    return (
      <div>
        <form action="submit">
          <MapContainer />
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
