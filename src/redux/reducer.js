import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContact,
  handleDeleteContacts,
  handleFilterContacts,
} from "./phonebookActions";

const contacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [handleDeleteContacts]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});

const filter = createReducer("", {
  [handleFilterContacts]: (_, { payload }) => payload,
});

export const rootReducer = combineReducers({ contacts, filter });
