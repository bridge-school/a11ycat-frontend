import React from "react";
import Styled from "styled-components";
import { fonts} from "../style-variables";
import logo from "../CatCallLogo.png";

const StyledHeader = Styled.header`
	width: 100%;
	background-color: #2f2c2c;
	color: white;
	font-size: 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 20px;
	font-family: ${fonts.serif}
	& a{
		color: inherit;
		font-size: 15px;
		font-family: ${fonts.sans}
	}

	& a: visited{
		color: white;
	}

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
