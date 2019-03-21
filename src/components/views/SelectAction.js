import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { Button } from "../Button";

const ButtonContainer = Styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
`;

const IntroText = Styled.div`
	color: white;
	font-size: 22px;
	text-align: center;
	line-height: 1.4;
	// margin: 50px 0 20px;

`;

export const SelectAction = () => (
  <ButtonContainer>
    <IntroText>
      <p>
        Catcall.io wants to make your streets safer. Report an incident when you
        have been catcalled, and see past catcall incidents so you know where to
        avoid!{" "}
      </p>
    </IntroText>
    <Link to="/report-incident">
      <Button text={"Report Incident"} />
    </Link>
    <Link to="/view-reports">
      <Button text={"View Reports"} />
    </Link>
  </ButtonContainer>
);
