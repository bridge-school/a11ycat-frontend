import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import map from "./mapReducer";
import radioScale from "./radioScaleReducer";

const catcalls = (state = [], action) => {
  if (action.type === "GET_CATCALLS_SUCCESS") {
    return action.payload;
  }

  return state;
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    map,
    catcalls,
    radioScale
  });
