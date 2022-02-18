import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../../redux/actions/adminActions";
import store from "../../redux/store/store";
import { CLEAR_USER, DELETE_MODAL_STATE } from "../../redux/types";

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
        <Typography id="modal-modal-title" variant="h4" component="h4">
          Delete User
        </Typography>
        <Box my={3}>
          <Typography id="modal-modal-title" variant="p" component="p">
            Do you really want to delete this user?
          </Typography>
          <Typography sx={{ fontWeight: "bold" }}>{user.name}</Typography>
        </Box>

        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
            <Box margin={1}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
            <Box margin={1}>
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteUserModal;
