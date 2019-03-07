import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { SelectAction, ReportIncident, ViewReports, NotFound } from "./views";

const Router = ({ history }) => (
  <ConnectedRouter history={history} className="App">
    <Switch>
      <Route exact path="/" component={SelectAction} />
      <Route exact path="/report-incident" component={ReportIncident} />
      <Route exact path="/view-reports" component={ViewReports} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
