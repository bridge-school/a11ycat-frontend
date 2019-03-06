import React, { Component } from "react";

import RadioScale from "../form/RadioScale";

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
      <form action="submit">
        {/* INSERT MAP HERE */}
        {/* INSERT TEXTFIELD HERE */}
        <h3>Please state how you felt when the incident happened </h3>
        <RadioScale
          selectedInput={this.state.selectedInput}
          inputOptions={this.state.inputOptions}
          handleRadioInputChange={this.handleRadioInputChange}
        />

        <button type="submit">Submit Report</button>
      </form>
    );
  }
}
