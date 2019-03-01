import React from "react"

export const Header = (props) =>
  <header>
    <img src={require('../CatCallLogo.png')}
      style={{height: 40}}
      alt="catcall.io logo"></img>
    <span>catcall.io</span>
    <a href="/" onClick={() => {
      console.log("set visibility of components")
    }}>home</a>
  </header>


export const Footer = () =>
  <footer>
  </footer>
