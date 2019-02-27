import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SelectAction } from '../components/views/SelectAction';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SelectAction />
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
