import * as types from "./index";
import { apiTransformGeoToAddress, apiGetGeoLocation } from "../api";

// NORMAL ACTIONS

export function mapIsLoading(bool) {
  return {
    type: types.MAP_IS_LOADING,
    loading: bool
  };
}

export function setLatLngSuccess(currentLocation) {
  return {
    type: types.SET_LAT_LNG_SUCCESS,
    currentLocation
  };
}

export function setLatLngFailure(bool) {
  return {
    type: types.SET_LAT_LNG_FAILURE,
    error: bool
  };
}

export function setAddressSuccess(address) {
  return {
    type: types.SET_ADDRESS_SUCCESS,
    address
  };
}

export function setAddressFailure(bool) {
  return {
    type: types.SET_ADDRESS_FAILURE,
    error: bool
  };
}

// ASYNC THUNK ACTIONS

export function setLatLng() {
  return dispatch => {
    return apiGetGeoLocation().then(
      resp => dispatch(setLatLngSuccess(resp)),
      () => dispatch(setLatLngFailure(true))
    );
  };
}

export function setAddress({ google, lat, lng }) {
  return dispatch => {
    return apiTransformGeoToAddress({ google, lat, lng }).then(
      resp => dispatch(setAddressSuccess(resp)),
      () => dispatch(setAddressFailure(true))
    );
  };
}
