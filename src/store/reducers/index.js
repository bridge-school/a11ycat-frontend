import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import map from "./mapReducer";
import incidents from "./incidentsReducer";
import radioScale from "./radioScaleReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    map,
    incidents,
    radioScale
  });
