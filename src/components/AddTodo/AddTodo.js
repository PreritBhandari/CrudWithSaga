import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodoSaga } from "../../actions/actions";

export default function AddTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

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
          onClick={() => {
            dispatch(
              addTodoSaga({
                id: uuid(),
                todo: value,
              })
            );
            setValue("");
          }}
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
