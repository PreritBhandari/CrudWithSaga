const initialState = [];

export const addTodoReducer = (state = initialState, action) => {
  if (action.type === "addTodo") {
    return action.payload;
  }
  return state;
};
