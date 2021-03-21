import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
} from "@material-ui/core";
import TodayIcon from "@material-ui/icons/Today";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
// import UpdateData from "./UpdateData";

export default function ListTodo({ allTodos }) {
  //   const [allTodos, setAllToDos] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  const [id, setId] = useState("");
  const [tododata, setTododata] = useState("");
  const [date, setDate] = useState("");

  const deleteTodo = (id) => {
    console.log("delete");
  };

  const updateTodo = (id, todo, date) => {
    console.log(id);
    setId(id);
    setTododata(todo);
    setDate(date);
    setModalOpen(true);
  };

  const modalClose = () => {
    setModalOpen(false);
  };


  const PrimaryTextColor = {
    color: "black",
    fontWeight: "bold",
  };

  return (
    <div>
      {/* <UpdateData
        isModalOpen={isModalOpen}
        modalClose={modalClose}
        id={id}
        todo={tododata}
        date={date}
      /> */}
      {loaded ? (
        <div className="todo">
          <Grid container spacing={3}>
            <List>
              {allTodos.map((todo) => (
                <ListItem
                  style={{ justifyContent: "space-between", width: "130%" }}
                >
                  <ListItemAvatar>
                    <Avatar>
                      <TodayIcon style={{ color: "green" }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={todo.value}
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
                      <EditIcon
                        onClick={() =>
                          updateTodo(
                            todo.id,
                            todo.data().todo,
                            todo.data().date
                          )
                        }
                        fontSize="small"
                        color="primary"
                      />

                      <DeleteIcon
                        onClick={() => deleteTodo(todo.id)}
                        fontSize="small"
                        color="secondary"
                      />
                    </Avatar>
                  </div>
                </ListItem>
              ))}
            </List>
          </Grid>
        </div>
      ) : null}
    </div>
  );
}
