import React from "react";
import "./App.css";
import ListTodo from "./components/ListTodo/ListTodo";

import { createStore } from "redux";
import { Provider } from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoReducer } from "./reducers/todoreducer";

const store = createStore(TodoReducer);

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
