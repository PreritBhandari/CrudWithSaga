import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

export default function AddTodo() {
  const [value, setValue] = useState();
  const [todoValue, setTodoValue] = useState("");

  const allTodos = [];

  const addTodo = (event) => {
    event.preventDefault();
    allTodos.push({
      value,
    });
    console.log(allTodos);
  };

  const textChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <TextField
          id="filled-size-small"
          value={value}
          placeholder="Add a Todo"
          variant="filled"
          size="small"
          onChange={textChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={addTodo}
          variant="contained"
          color="primary"
          size="medium"
        >
          Add
        </Button>
      </form>
      <br />
    </div>
  );
}
