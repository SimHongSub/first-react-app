import { combineReducers } from "redux";
import counter from "./counter";

const rootRecucer = combineReducers({
  counter,
});

export default rootRecucer;
