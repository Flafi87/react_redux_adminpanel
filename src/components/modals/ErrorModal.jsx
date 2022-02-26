import React from 'react';
import store from "../../redux/store/store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getUsers } from "../../redux/actions/adminActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ERROR } from '../../redux/types';


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

const ErrorModal = () => {
    const dispatch = useDispatch();
    const {errorModal,error} = useSelector((state) => state.error);

    const handleClose =() => {
        dispatch({ type: ERROR, payload: null });
    };

    const loadAgain = () => {
        store.dispatch(getUsers());
    };

  return (
    <Modal
    open={errorModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h4">
        Error
      </Typography>
      <Box my={3}>
          <Typography sx={{ fontWeight: "bold" }}>{error}</Typography>
      </Box>


        <Box sx={{ display: "flex" }} justifyContent={"flex-end"}>
          <Box margin={1}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleClose}
            >
              OK
            </Button>
          </Box>
          <Box margin={1}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={loadAgain}
            >
              Load again
            </Button>
          </Box>
        </Box>
      </Box>

  </Modal>
  );
};

export default ErrorModal;