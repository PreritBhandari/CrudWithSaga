import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../actions/actions";

export default function UpdateDataModal({ id, todo, isModalOpen, modalClose }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState();

  const updatedData = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={modalClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>{todo}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id={id}
            label="Updated Todo"
            type="text"
            fullWidth
            value={value}
            onChange={updatedData}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={modalClose} color="primary">
            Close
          </Button>
          <Button
            onClick={() =>
              dispatch(
                updateTodo({
                  todo: value,
                  id: id,
                })
              )
            }
            color="primary"
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
