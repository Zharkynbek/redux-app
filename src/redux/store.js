import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todos-reducer';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devtools: process.env.NODE_ENV === 'development',
});

export default store;
