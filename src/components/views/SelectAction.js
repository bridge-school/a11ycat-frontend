import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export const SelectAction = () => (
  <>
    <Link to="/report-incident">
      <Button text={"Report Incident"} />
    </Link>
    <Link to="/view-reports">
      <Button text={"View Reports"} />
    </Link>
  </>
);
