import * as types from "../actions";

const initialState = {
  error: false,
  loading: false,
  incidents: [],
  submittedID: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INCIDENTS_SUCCESS: {
      return {
        ...state,
        incidents: action.incidents
      };
    }
    case types.GET_INCIDENTS_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }
    case types.SUBMIT_FORM_SUCCESS: {
      return {
        ...state,
        submittedID: action.successID
      };
    }
    case types.SUBMIT_FORM_FAILURE: {
      return {
        ...state,
        error: true
      };
    }
    default: {
      return state;
    }
  }
};
