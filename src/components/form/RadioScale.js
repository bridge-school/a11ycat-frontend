import React from "react";

import { RadioInput } from "./RadioInput";

export const RadioScale = ({
  inputOptions,
  selectedInput,
  handleRadioInputChange
}) =>
  inputOptions.map(input => {
    return (
      <RadioInput
        handleChange={handleRadioInputChange}
        displayEmoji={input.displayEmoji}
        inputRating={input.inputRating}
        selectedInput={selectedInput}
        key={input.inputRating}
      />
    );
  });
