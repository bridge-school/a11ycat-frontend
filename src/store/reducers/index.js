import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import map from "./mapReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    map
  });
