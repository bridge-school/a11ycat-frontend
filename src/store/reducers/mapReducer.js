import * as types from "../actions";

const initialState = {
  error: false,
  loading: false,
  currentLocation: {
    lat: 43.6532,
    lng: -79.3832
  },
  centerMarker: {
    lat: 43.6532,
    lng: -79.3832
  },
  address: "100 Queen St W, Toronto, ON M5G 1P5, Canada"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MAP_IS_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case types.SET_CURRENT_LOCATION_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentLocation: action.currentLocation,
        centerMarker: action.currentLocation
      };
    }
    case types.SET_CURRENT_LOCATION_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }
    case types.CENTER_MOVED_SUCCESS: {
      return {
        ...state,
        centerMarker: action.centerMarker
      };
    }
    case types.CENTER_MOVED_FAILURE: {
      return {
        ...state
      };
    }
    case types.SET_ADDRESS_SUCCESS: {
      return {
        ...state,
        error: false,
        loading: false,
        address: action.address
      };
    }
    case types.SET_ADDRESS_FAILURE: {
      return {
        ...state,
        error: true,
        loading: false,
        address: ""
      };
    }
    default: {
      return state;
    }
  }
};
