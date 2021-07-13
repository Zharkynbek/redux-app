import { assignmentExpression } from '@babel/types';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchTodos = () => {
  return axios.get('/todos').then(response => response.data);
};

const updateTodo = (todoId, update) => {
  return axios.patch(`/todo/${todoId}`, update).then(({ data }) => data);
};

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
