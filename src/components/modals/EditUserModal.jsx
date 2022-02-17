import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addUser, updateUser } from "../../redux/actions/adminActions";
import store from "../../redux/store/store";
import {
  MODAL_STATE,
  CHANGE_USER_DATA,
  CLEAR_USER,
  CHANGE_CITY,
} from "../../redux/types";
import TextField from "@mui/material/TextField";
import { width } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditUserModal = () => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state) => state.adminPanel.modal.open);
  const title = useSelector((state) => state.adminPanel.modal.title);
  const user = useSelector((state) => state.adminPanel.user);
  const error = useSelector((state) => state.adminPanel.validity);

  useEffect(() => {}, []);

  const handleClose = () => {
    dispatch({ type: CLEAR_USER });
    dispatch({ type: MODAL_STATE, payload: { open: false } });
  };

  const updateUserData = (key, value) => {
    return dispatch({ type: CHANGE_USER_DATA, payload: { key, value } });
  };

  const updateCity = (value) => {
    return dispatch({ type: CHANGE_CITY, payload: value });
  };

  const handleSave = () => {
    if (user.id) {
      store.dispatch(updateUser());
    } else {
      store.dispatch(addUser());
    }
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h4" margin={3}>
          {title}
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%", height: "65px" },
          }}
          autoComplete="off"
        >
          <Grid display={"flex"}>
            <Grid
              item
              xs={4}
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="h5">
                Name
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                error={error.name.error}
                id="name"
                label="Name"
                defaultValue={user.name}
                helperText={error.name.description}
                onChange={(event) => updateUserData("name", event.target.value)}
                sx={{ m: 1, width: "100%" }}
              />
            </Grid>
          </Grid>
          <Grid display={"flex"}>
            <Grid
              item
              xs={4}
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="h5">
                E-mail
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                error={error.email.error}
                id="email"
                label="E-mail"
                defaultValue={user.email}
                placeholder="jon@doe.com"
                helperText={error.email.description}
                onChange={(event) =>
                  updateUserData("email", event.target.value)
                }
              />
            </Grid>
          </Grid>
          <Grid display={"flex"}>
            <Grid
              item
              xs={4}
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="h5">
                Username
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="username"
                label="Username"
                defaultValue={user.username}
                placeholder=""
                onChange={(event) =>
                  updateUserData("username", event.target.value)
                }
              />
            </Grid>
          </Grid>

          <Grid display={"flex"}>
            <Grid
              item
              xs={4}
              textAlign={"center"}
              justifyContent={"center"}
              display={"flex"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="h5">
                City
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="city"
                label="City"
                defaultValue={user.address.city}
                placeholder=""
                onChange={(event) => updateCity(event.target.value)}
              />
            </Grid>
          </Grid>

          <Box display={"flex"} justifyContent={"flex-end"}>
            <Box margin={1}>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                size={"medium"}
              >
                Cancel
              </Button>
            </Box>
            <Box margin={1}>
              <Button
                variant="contained"
                color="success"
                onClick={handleSave}
                size={"medium"}
                disabled={error.name.error || error.email.error}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
