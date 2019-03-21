import React from "react";
import Styled from "styled-components";
import logo from "../CatCallLogo.png";

const StyledHeader = Styled.header`
	width: 100%;
	background-color: darkgrey;
`;

export const Header = () => (
  <StyledHeader>
    <img src={logo} style={{ height: 40 }} alt="catcall.io logo" />
    <span>catcall.io</span>
    <a href="/" onClick={() => {}}>
      home
    </a>
  </StyledHeader>
);

export const Footer = () => <footer />;
