import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import { listTodos } from '../../modules/todo';

const TodoListContainer = () => {
  const dispatch = useDispatch();
  const { todos, error, loading } = useSelector(({ todos, loading }) => ({
    todos: todos.todos,
    error: todos.error,
    loading: loading['todo/TODO_LIST'],
  }));
  useEffect(() => {
    dispatch(listTodos());
  }, [dispatch]);

  return <TodoList loading={loading} error={error} todos={todos} />;
};

export default withRouter(TodoListContainer);
