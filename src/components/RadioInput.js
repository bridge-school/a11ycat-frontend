import React from "react";

const RadioInput = ({ displayEmoji, inputRating }) => {
  return (
    <React.Fragment>
      <label htmlFor="inputRating">
        <span role="img" aria-label="inputRating">
          {displayEmoji}
        </span>
      </label>
      <input
        id="inputRating"
        type="radio"
        name="emojiRating"
        value="1"
        checked={this.state.emojirating === "inputRating"}
        onChange={this.handleChange}
      />
    </React.Fragment>
  );
};

export default RadioInput;
