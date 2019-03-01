import React, { Component } from 'react';
import { SelectAction } from './views/SelectAction';
import { connect } from 'react-redux';

class Main extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);