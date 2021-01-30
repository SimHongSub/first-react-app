import { INCREASE, DECREASE } from "../constants/ActionTypes";
import { createActions } from "redux-actions";

export const increase = createActions(INCREASE);
export const decrease = createActions(DECREASE);
