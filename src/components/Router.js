import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";

import { SelectAction } from "./views/SelectAction";
import ReportIncident from "./views/ReportIncident";
import { ViewReports } from "./views/ViewReports";

const Router = () => (
  <div className="App">
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <SelectAction />} />
        <Route
          exact
          path="/report-incident"
          render={() => <ReportIncident />}
        />
        <Route exact path="/view-reports" render={() => <ViewReports />} />
      </Switch>
    </ConnectedRouter>
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Router);
