export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const ADD_TODO_SAGA = "ADD_TODO_SAGA";
export const DELETE_TODO_SAGA = "DELETE_TODO_SAGA";
export const UPDATE_TODO_SAGA = "UPDATE_TODO_SAGA";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

//Saga actions Functions

export function addTodoSaga(todo) {
  return {
    type: ADD_TODO_SAGA,
    payload: todo,
  };
}

export function deleteTodoSaga(id) {
  return {
    type: DELETE_TODO_SAGA,
    payload: id,
  };
}

export function updateTodoSaga(todo) {
  return {
    type: UPDATE_TODO_SAGA,
    payload: todo,
  };
}
