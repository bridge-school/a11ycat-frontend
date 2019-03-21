import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.button`
	border-radius: 0;
	padding: 10px;
	border: 1px solid black;
	background-color: lightgrey;
`;

export const Button = ({ text }) => (
  <StyledButton className="button" type="button">
    {text}
  </StyledButton>
);
