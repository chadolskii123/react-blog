import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as todoAPI from '../lib/api/todo';
import { takeLatest } from 'redux-saga/effects';

// list
const [
  TODO_LIST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAILURE,
] = createRequestActionTypes('todo/TODO_LIST');
export const listTodos = createAction(TODO_LIST);
const listTodoSaga = createRequestSaga(TODO_LIST, todoAPI.listTodos);

// finish
const [
  TODO_FINISH,
  TODO_FINISH_SUCCESS,
  TODO_FINISH_FAILURE,
] = createRequestActionTypes('todo/TODO_FINISH');
export const finishTodo = createAction(TODO_FINISH);
const finishTodoSaga = createRequestSaga(TODO_FINISH, todoAPI.finishTodo);

export function* todosSaga() {
  yield takeLatest(TODO_LIST, listTodoSaga);
  yield takeLatest(TODO_FINISH, finishTodoSaga);
}

const initialState = {
  todos: null,
  error: null,
};

const todos = handleActions(
  {
    [TODO_LIST_SUCCESS]: (state, { payload: todos }) => ({
      ...state,
      todos,
    }),
    [TODO_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [TODO_FINISH_SUCCESS]: (state) => ({
      ...state,
    }),
    [TODO_FINISH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default todos;
