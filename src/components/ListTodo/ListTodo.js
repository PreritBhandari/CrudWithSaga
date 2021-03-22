import React, { useEffect, useState } from "react";
import { List, Grid } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import ListItemTodo from "./ListItem/ListItemTodo";

// import UpdateData from "./UpdateData";

export default function ListTodo() {
  const dispatch = useDispatch();

  let allTodos = useSelector((state) => state);

  const [loaded, setLoaded] = useState(true);

  return (
    <div>
      {loaded ? (
        <div className="todo">
          <Grid container spacing={3}>
            <List>
              {allTodos.map((todo) => (
                <ListItemTodo key={todo.id} todo={todo} />
              ))}
            </List>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}
