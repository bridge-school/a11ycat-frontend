import * as types from "../actions";

const initialState = {
  loading: false,
  error: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.MAP_IS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case types.MAP_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false
      };
    }
    case types.MAP_FETCH_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
}
