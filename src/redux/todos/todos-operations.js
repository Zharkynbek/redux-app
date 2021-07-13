import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => async dispatch => {
  dispatch(fetchTodoRequest());
  try {
    const { data } = await axios.get('/todos');
    dispatch(fetchTodoSuccess(data));
  } catch (error) {
    dispatch(fetchTodoError(error));
  }
};

// const fetchTodos = () => dispatch => {
//   dispatch(fetchTodoRequest());

//   axios
//     .get('/todos')
//     .then(({ data }) => dispatch(fetchTodoSuccess(data)))
//     .catch(error => dispatch(fetchTodoError(error)));
// };

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

const toggleCompleted = ({ id, completed }) => dispatch => {
  dispatch(toggleCompletedRequest());

  const update = { completed };

  axios
    .patch(`/todos/${id}`, update)
    .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
    .catch(error => dispatch(toggleCompletedError(error)));
};

export default {
  addTodo,
  deleteTodo,
  toggleCompleted,
  fetchTodos,
};
