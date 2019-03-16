import * as types from "./index";
import {
  apiGetGeoLocation,
  apiCenterMoved,
  apiTransformGeoToAddress
} from "../api";

// NORMAL ACTIONS

export const mapIsLoading = bool => ({
  type: types.MAP_IS_LOADING,
  loading: bool
});

export const setCurrentLocationSuccess = currentLocation => ({
  type: types.SET_CURRENT_LOCATION_SUCCESS,
  currentLocation
});

export const setCurrentLocationFailure = bool => ({
  type: types.SET_CURRENT_LOCATION_FAILURE,
  error: bool
});

export const centerMovedSuccess = centerMarker => ({
  type: types.CENTER_MOVED_SUCCESS,
  centerMarker
});

export const centerMovedFailure = bool => ({
  type: types.CENTER_MOVED_FAILURE,
  error: bool
});

export const setAddressSuccess = address => ({
  type: types.SET_ADDRESS_SUCCESS,
  address
});

export const setAddressFailure = bool => ({
  type: types.SET_ADDRESS_FAILURE,
  error: bool
});

// ASYNC THUNK ACTIONS

export const setLatLng = () => async dispatch => {
  try {
    const resp = await apiGetGeoLocation();
    return dispatch(setCurrentLocationSuccess(resp));
  } catch (e) {
    return dispatch(setCurrentLocationFailure(true));
  }
};

export const centerMoved = ({ map }) => async dispatch => {
  try {
    const resp = await apiCenterMoved({ map });
    return dispatch(centerMovedSuccess(resp));
  } catch (e) {
    return dispatch(centerMovedFailure(true));
  }
};

export const setAddress = ({ google, lat, lng }) => async dispatch => {
  try {
    const resp = await apiTransformGeoToAddress({ google, lat, lng });
    return dispatch(setAddressSuccess(resp));
  } catch (e) {
    return dispatch(setAddressFailure(true));
  }
};

export function setLatLngAndAddress({ google }) {
  return (dispatch, getState) => {
    return dispatch(setLatLng()).then(() => {
      const { lat, lng } = getState().map.currentLocation;
      return dispatch(setAddress({ google, lat, lng }));
    })
  }
};

export function centerMovedAndAddress({ map, google }) {
  return (dispatch, getState) => {
    return dispatch(centerMoved({ map })).then(() => {
      const { lat, lng } = getState().map.centerMarker;
      return dispatch(setAddress({ google, lat, lng }));
    })
  }
};
