import React from "react";
import "./App.css";
import ListTodo from "./components/ListTodo/ListTodo";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import AddTodo from "./components/AddTodo/AddTodo";
import { TodoReducer } from "./reducers/todoreducer";

const sagaMiddleware = createSagaMiddleware();

// sagaMiddleware.run();

const store = createStore(TodoReducer, applyMiddleware(sagaMiddleware));

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
