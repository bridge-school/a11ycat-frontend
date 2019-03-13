import * as types from "../actions";

const initialState = {
  error: false,
  loading: false,
  currentLocation: {
    lat: 43.6532,
    lng: -79.3832,
    address: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.MAP_IS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case types.SET_LAT_LNG_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentLocation: {
          lat: action.currentLocation.lat,
          lng: action.currentLocation.lng
        }
      };
    }
    case types.SET_LAT_LNG_FAILURE: {
      return {
        ...state,
        loading: false,
        currentLocation: {
          address: ""
        }
      };
    }
    case types.SET_ADDRESS_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        currentLocation: {
          address: action.address
        }
      };
    }
    case types.SET_ADDRESS_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
        currentLocation: {
          address: ""
        }
      };
    }
    default: {
      return state;
    }
  }
}
