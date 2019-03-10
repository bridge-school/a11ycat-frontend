import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioInputChange(e) {
    this.setState({ selectedInput: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      emojiRating: this.state.selectedInput,
      location: "Toronto"
    };

    axios.post("http://localhost:8081/addReport", { formData });
    // .then(res => console.log(res))
    // .catch(err => console.log(err));
  }

  static componentDidMount() {
    axios.get("http://localhost:8081/catcalls");
  }

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.handleSubmit}>
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
        <Link to="/view-reports">
          <Button text={"Cancel"} />
        </Link>
        <div>
          <MapContainer />
        </div>
      </div>
    );
  }
}
