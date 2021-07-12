import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addTodo = createAction('todos/add', text => {
  return {
    payload: {
      id: shortid.generate(),
      text,
      completed: false,
    },
  };
});

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todos/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
