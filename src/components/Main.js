import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store';

import { SelectAction } from './views/SelectAction';
import { ReportIncident } from './views/ReportIncident';
import { ViewReports } from './views/ViewReports';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={() => <SelectAction />} />
              <Route exact path="/report-incident" render={() => <ReportIncident />} />
              <Route exact path="/view-reports" render={() => <ViewReports />} />
            </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);