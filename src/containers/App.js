import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Header, Footer } from '../components/HeaderFooter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
