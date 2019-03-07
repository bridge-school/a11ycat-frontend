import React from "react";
import logo from "../CatCallLogo.png";

export const Header = () => (
  <header>
    <img src={logo} style={{ height: 40 }} alt="catcall.io logo" />
    <span>catcall.io</span>
    <a href="/" onClick={() => {}}>
      home
    </a>
  </header>
);

export const Footer = () => <footer />;
