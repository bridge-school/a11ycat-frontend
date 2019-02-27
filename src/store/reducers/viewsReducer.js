import * as types from '../actions';

const initialState = {
  loading: false,
  error: false,
  view: 'SelectAction',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.DISPLAY_SELECT_ACTION: {
      return {
        ...state,
        loading: true,
        // view: 'SelectAction',
      };
    }
    case types.DISPLAY_SELECT_ACTION_SUCCESS: {
      return {
        ...state,
        loading: false,
        view: 'SelectAction',
      }
    }
    case types.DISPLAY_SELECT_ACTION_FAILURE: {
      return {
        ...state,
        error: true,
        // view: ??
      }
    }
    case types.DISPLAY_REPORT_INCIDENT_SUCCESS: {
      return {
        ...state,
        loading: false,
        view: 'ReportIncident',
      }
    }
    case types.DISPLAY_REPORT_INCIDENT_FAILURE: {
      return {
        ...state,
        error: true,
        // view: ??
      }
    }
    case types.DISPLAY_VIEW_REPORTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        view: 'ViewReports',
      }
    }
    case types.DISPLAY_VIEW_REPORTS_FAILURE: {
      return {
        ...state,
        error: true,
        // view: ??
      }
    }
    default: {
      return state;
    }
  }
}