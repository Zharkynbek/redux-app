import { createAction, createReducer, combineReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const increment = createAction('counter/add');

const value = createReducer(0, {
  [increment]: (state, _) => state + 1,
});

export default combineReducers({
  value,
});
