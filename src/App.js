import React from "react";
import "./App.css";
import ListTodo from "./components/ListTodo/ListTodo";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { addTodoReducer } from "./reducers/addTodoReducer";
import AddTodo from "./components/AddTodo/AddTodo";

const rootReducer = combineReducers({
  addTodoReducer: addTodoReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

const Home = () => {
  return (
    <div className="App">
      <AddTodo />
      <ListTodo />
    </div>
  );
};

export default App;
