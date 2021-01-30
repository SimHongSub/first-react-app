import { CHANGE_INPUT, INSERT, TOGGLE, REMOVE } from "../constants/ActionTypes";
import { createActions } from "redux-actions";

export const changeInput = createActions(CHANGE_INPUT, (input) => input);

let id = 3;

export const insert = createActions(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createActions(TOGGLE, (id) => id);

export const remove = createActions(REMOVE, (id) => id);
