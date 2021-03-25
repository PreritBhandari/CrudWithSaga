import React from "react";
import { List, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ListItemTodo from "./ListItem/ListItemTodo";

export default function ListTodo() {
  let allTodos = useSelector((state) => state);

  return (
    <div className="todo">
      <Grid container spacing={3}>
        <List>
          {allTodos.map((todo) => (
            <ListItemTodo key={todo.id} todo={todo} />
          ))}
        </List>
      </Grid>
    </div>
  );
}
