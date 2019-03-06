import React from "react";

const RadioInput = ({
  displayEmoji,
  inputRating,
  handleChange,
  selectedInput
}) => {
  return (
    <React.Fragment>
      <label htmlFor={inputRating}>
        <span role="img" aria-label={inputRating}>
          {displayEmoji}
        </span>
      </label>
      <input
        id={inputRating}
        type="radio"
        name="emojiRating"
        value={inputRating}
        checked={inputRating === selectedInput}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default RadioInput;
