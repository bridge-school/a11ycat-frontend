import React from "react";
import { connect } from "react-redux";
import { SelectAction } from './views/SelectAction';

const Main = {
  render() {
    return (
      <div className="App">
        <SelectAction />
      </div>
    );
  }
}

// const mapStateToProps = () => ({});

// const mapDispatchToProps = {};

export default connect(
  null,
  null
)(Main);
