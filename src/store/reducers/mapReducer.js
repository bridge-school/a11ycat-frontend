import * as types from "../actions";

const initialState = {
  error: false,
  currentLocation: {
    lat: null,
    lng: null
  },
  address: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SET_LAT_LNG_SUCCESS: {
      return {
        ...state,
        error: false,
        currentLocation: {
          lat: action.lat,
          lng: action.lng
        }
      };
    }
    case types.SET_LAT_LNG_FAILURE: {
      return {
        ...state,
        error: true,
        address: ""
      };
    }
    case types.SET_ADDRESS_SUCCESS: {
      return {
        ...state,
        error: false,
        address: action.address
      };
    }
    case types.SET_ADDRESS_FAILURE: {
      return {
        ...state,
        error: true,
        address: ""
      };
    }
    default: {
      return state;
    }
  }
}
