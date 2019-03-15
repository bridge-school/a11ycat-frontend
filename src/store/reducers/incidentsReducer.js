import * as types from "../actions";

const initialState = {
  error: false,
  loading: false,
  incidents: []
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
    default: {
      return state;
    }
  }
};
