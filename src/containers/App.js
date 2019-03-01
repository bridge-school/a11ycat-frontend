import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SelectAction } from '../components/views/SelectAction';
import './App.css';
import { Header, Footer } from '../components/HeaderFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SelectAction />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
