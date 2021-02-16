import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import { finishTodo } from '../../modules/todo';

const TodoListBlock = styled(Responsive)`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

const TodoItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;

  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
  ${(props) =>
    props.finishStatus &&
    css`
      text-decoration: line-through;
    `}
`;

const TodoItem = ({ todo }) => {
  const { title, finishStatus, _id } = todo;
  const dispatch = useDispatch();

  const onFinish = () => {
    dispatch(finishTodo({ _id }), [dispatch]);
    console.log(_id);
  };
  return (
    <TodoItemBlock finishStatus={finishStatus} onClick={onFinish}>
      <h2>{title}</h2>
    </TodoItemBlock>
  );
};

const TodoList = ({ todos, loading, error }) => {
  if (error) {
    return <TodoListBlock>에러가 발생했습니다.</TodoListBlock>;
  }
  return (
    <TodoListBlock>
      {!loading && todos && (
        <div>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo._id} />
          ))}
        </div>
      )}
    </TodoListBlock>
  );
};

export default TodoList;
