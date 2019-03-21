import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { Button } from "../Button";

const ButtonContainer = Styled.div`
	width: 50%;
`;

export const SelectAction = () => (
  <ButtonContainer>
    <Link to="/report-incident">
      <Button text={"Report Incident"} />
    </Link>
    <Link to="/view-reports">
      <Button text={"View Reports"} />
    </Link>
  </ButtonContainer>
);
