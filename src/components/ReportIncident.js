import React, { Component } from "react";

class ReportIncident extends Component {
  constructor() {
    super();
    this.state = {
      emojiRating: ""
    };
  }
  handleChange = e => {
    this.setState({ emojiRating: e.target.value });
  };

  render() {
    return (
      <form action="submit">
        {/* INSERT MAP HERE */}

        <label htmlFor="emojiScale-1">
          <span role="img" aria-label="1">
            😑
          </span>
        </label>
        <input
          id="emojiScale-1"
          type="radio"
          name="emojiRating"
          value="1"
          checked={this.state.emojirating === "1"}
          onChange={this.handleChange}
        />

        <label htmlFor="emojiScale-2">
          <span role="img" aria-label="2">
            😟
          </span>
        </label>
        <input
          id="emojiScale-2"
          type="radio"
          name="emojiRating"
          value="2"
          checked={this.state.emojirating === "2"}
          onChange={this.handleChange}
        />

        <label htmlFor="emojiScale-3">
          <span role="img" aria-label="3">
            😡
          </span>
        </label>
        <input
          id="emojiScale-3"
          type="radio"
          name="emojiRating"
          value="3"
          checked={this.state.emojirating === "3"}
          onChange={this.handleChange}
        />

        <label htmlFor="emojiScale-4">
          <span role="img" aria-label="4">
            😨
          </span>
        </label>
        <input
          id="emojiScale-4"
          type="radio"
          name="emojiRating"
          value="4"
          checked={this.state.emojirating === "4"}
          onChange={this.handleChange}
        />

        <label htmlFor="emojiScale-5">
          <span role="img" aria-label="5">
            😱
          </span>
        </label>
        <input
          id="emojiScale-5"
          type="radio"
          name="gender"
          value="5"
          checked={this.state.emojirating === "5"}
          onChange={this.handleChange}
        />

        <button type="submit">Submit Report</button>
      </form>
    );
  }
}

export default ReportIncident;
