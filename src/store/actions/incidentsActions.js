import * as types from "./index";
import { apiGetIncidents } from "../api";

// NORMAL ACTIONS

export const getIncidentsSuccess = incidents => ({
  type: types.GET_INCIDENTS_SUCCESS,
  incidents
});

export const getIncidentsFailure = bool => ({
  type: types.GET_INCIDENTS_FAILURE,
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
