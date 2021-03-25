import { delay, put, takeEvery } from "redux-saga/effects";
import { addTodo, deleteTodo, updateTodo } from "../actions/actions";

function* addTodoAsync(action) {
  yield delay(2000);
  yield put(addTodo(action.payload));
}

function* deleteTodoAsync(action) {
  yield delay(2000);
  yield put(deleteTodo(action.payload));
}

function* updateTodoAsync(action) {
  yield delay(2000);
  yield put(updateTodo(action.payload));
}

export function* watchAddTodo() {
  yield takeEvery("ADD_TODO_SAGA", addTodoAsync);
  yield takeEvery("DELETE_TODO_SAGA", deleteTodoAsync);
  yield takeEvery("UPDATE_TODO_SAGA", updateTodoAsync);
}
