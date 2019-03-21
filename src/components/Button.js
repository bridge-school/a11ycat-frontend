import React from "react";
import Styled from "styled-components";

const StyledButton = Styled.button`
	border-radius: 0;
	padding: 10px;
	border: 1px solid black;
	background-color: #fefefe;
	width: 300px;
	padding: 10px;
	box-shadow: 1px 2px 0px #000;
	margin: 10px;
`;

export const Button = ({ text }) => (
  <StyledButton className="button" type="button">
    {text}
  </StyledButton>
);
