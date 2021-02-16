import client from './client';

export const writeTodo = ({ title }) => client.post('/api/todos', { title });

export const updateTodo = ({ title, id }) =>
  client.put(`/api/todos/?${id}`, { title });

export const finishTodo = ({ _id }) => client.patch(`/api/todos/${_id}`);
export const deleteTodo = ({ _id }) => client.delete(`/api/todos/${_id}`);

export const listTodos = () => client.get(`/api/todos`);
