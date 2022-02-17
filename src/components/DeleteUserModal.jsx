import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../redux/actions/adminActions";
import store from "../redux/store/store";
import { DELETE_USER, CLEAR_USER, DELETE_MODAL_STATE } from "../redux/types";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DeleteUserModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.adminPanel.deleteModal);
  const user = useSelector((state) => state.adminPanel.user);

  useEffect(() => {}, []);

  const handleClose = () => {
    dispatch({ type: CLEAR_USER });
    dispatch({ type: DELETE_MODAL_STATE, payload: false });
  };

  const handleDelete = () => {
    store.dispatch(deleteUser());
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Delete User
        </Typography>
        <Typography id="modal-modal-title" variant="p" component="p">
          Do you really want to delete user {user.name}?
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ display: "flex" }}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
