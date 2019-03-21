import { push } from "connected-react-router";
import * as types from "./index";
import { apiGetIncidents, apiPostForm } from "../api";

// NORMAL ACTIONS

export const getIncidentsSuccess = incidents => ({
  type: types.GET_INCIDENTS_SUCCESS,
  incidents
});

export const getIncidentsFailure = bool => ({
  type: types.GET_INCIDENTS_FAILURE,
  error: bool
});

export const submitFormSuccess = successID => ({
  type: types.SUBMIT_FORM_SUCCESS,
  submittedID: successID
});

export const submitFormFailure = bool => ({
  type: types.SUBMIT_FORM_FAILURE,
  error: bool
});

// ASYNC THUNK ACTIONS

export const getIncidents = () => async dispatch => {
  try {
    const resp = await apiGetIncidents();
    return dispatch(getIncidentsSuccess(resp));
  } catch (e) {
    return dispatch(getIncidentsFailure(true));
  }
};

export const submitForm = selectedInput => async (dispatch, getState) => {
  try {
    const formData = {
      emojiRating: selectedInput,
      location: {
        lat: getState().map.centerMarker.lat,
        lng: getState().map.centerMarker.lng
      },
      textLocation: getState().map.address
    };
    const resp = await apiPostForm(formData);
    return (dispatch(submitFormSuccess(resp)).then(() => dispatch(push("/view-reports"))))
  } catch (e) {
    return dispatch(submitFormFailure(true));
  }
};
