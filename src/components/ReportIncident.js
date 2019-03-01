import React, { Component } from "react";

import RadioScale from "./RadioScale";

class ReportIncident extends Component {
  constructor() {
    super();
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
  }
  handleRadioInputChange = e => {
    this.setState({ inputScaleRating: e.target.value });
  };

  render() {
    return (
      <form action="submit">
        {/* INSERT MAP HERE */}
        {/* INSERT TEXTFIELD HERE */}

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

export default ReportIncident;
