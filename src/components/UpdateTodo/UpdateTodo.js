import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import UpdateDataModal from "./UpdateDataModal";

export default function UpdateTodo({ id, todo }) {
  const [modalOpen, setModalOpen] = useState(false);

  const updateTodo = (id, todo) => {
    console.log(id, todo);
    setModalOpen(true);
  };

  const modalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <UpdateDataModal
        isModalOpen={modalOpen}
        modalClose={modalClose}
        id={id}
        todo={todo}
      />
      <EditIcon
        onClick={() => updateTodo(id, todo)}
        fontSize="small"
        color="primary"
      />
    </div>
  );
}
