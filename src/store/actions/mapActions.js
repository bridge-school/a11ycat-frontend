import * as types from "./index";
// import { apiTransformGeoToAddress } from '../api';

// NORMAL ACTIONS

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

// export function setAddress({ google, lat, lng }) {
//   return (dispatch) => {
//     apiTransformGeoToAddress({ google, lat, lng })
//       .then(
//         resp => dispatch(setAddressSuccess(resp)),
//         () => dispatch(setAddressFailure(true)),
//       );
//   };
// };
