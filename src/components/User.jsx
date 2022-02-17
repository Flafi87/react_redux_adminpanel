import React from "react";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  MODAL_STATE,
  CHANGE_USER_DATA,
  GET_ONE_USER,
  DELETE_USER,
  DELETE_MODAL_STATE,
} from "../redux/types";

const commonStyles = {
  border: 1,
  borderColor: "text.primary",
};

const User = ({ user }) => {
  const dispatch = useDispatch();
  const { id, name, username, email, address } = user;
  const { city } = address;
  const handleEdit = () => {
    dispatch({
      type: GET_ONE_USER,
      payload: user,
    });
    dispatch({
      type: MODAL_STATE,
      payload: {
        open: true,
        title: "Edit User Data",
      },
    });
  };

  const handleDelete = () => {
    dispatch({ type: GET_ONE_USER, payload: { id, name, email,address:{city} } });
    dispatch({ type: DELETE_MODAL_STATE, payload: true });
  };

  return (
    <Grid
      container
      sx={{
        ...commonStyles,
        borderBottom: 0,
        borderRight: 0,
        borderLeft: 0,
        textAlign: "center",
        overflow: "hidden",
      }}
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
    >
      <Grid item  >
        <p>{id}</p>
      </Grid>
      <Grid item  >
        <p>{name}</p>
      </Grid>
      <Grid item  >
        <p>{username}</p>
      </Grid>
      <Grid item  >
        <p>{email}</p>
      </Grid>
      <Grid item  >
        <p>{address.city}</p>
      </Grid>

      <Grid item>
        <Button variant="contained" color="secondary" onClick={handleEdit}>
          edit
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="error" onClick={handleDelete}>
          delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default User;
