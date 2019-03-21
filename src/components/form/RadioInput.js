import React from "react";
import Styled from "styled-components";

const StyledLabel = Styled.label`
width: 30px;
	& span {
		font-size: 45px;
	}
`;

const StyledRadioInput = Styled.input`
	width: 1px;
	height: 1px;
	position: absolute;
	z-index: -999;

&:checked + label{
	outline: 3px solid white;
}
`;

export const RadioInput = ({
  displayEmoji,
  inputRating,
  handleChange,
  selectedInput
}) => {
  return (
    <>
      <StyledRadioInput
        id={inputRating}
        type="radio"
        name="emojiRating"
        value={inputRating}
        checked={inputRating === selectedInput}
        onChange={handleChange}
      />
      <StyledLabel htmlFor={inputRating}>
        <span role="img" aria-label={inputRating}>
          {displayEmoji}
        </span>
      </StyledLabel>
    </>
  );
};
