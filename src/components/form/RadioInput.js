import React from "react";

export const RadioInput = ({
  displayEmoji,
  inputRating,
  handleChange,
  selectedInput
}) => {
  return (
    <>
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
    </>
  );
};
