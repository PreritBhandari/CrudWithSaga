import React, { useEffect, useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../actions/actions";
import UpdateTodo from "../../UpdateTodo/UpdateTodo";

export default function ListItemTodo({ todo }) {
  const dispatch = useDispatch();

  const PrimaryTextColor = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div>
     
      <ListItem
        style={{ justifyContent: "space-between", width: "130%" }}
        key={todo.id}
      >
        <ListItemAvatar>
          <Avatar>
            <TodayIcon style={{ color: "green" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={todo.todo}
          primaryTypographyProps={{ style: PrimaryTextColor }}
        />

        <div style={{ paddingLeft: 30 }}>
          <Avatar
            style={{
              backgroundColor: "transparent",
              justifyContent: "space-between",
              width: 60,
            }}
          >
            <UpdateTodo id={todo.id} todo={todo.todo} />

            <DeleteIcon
              onClick={() => dispatch(deleteTodo(todo.id))}
              fontSize="small"
              color="secondary"
            />
          </Avatar>
        </div>
      </ListItem>
    </div>
  );
}
