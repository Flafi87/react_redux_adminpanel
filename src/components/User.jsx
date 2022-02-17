import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {
  MODAL_STATE,
  GET_ONE_USER,
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
    dispatch({
      type: GET_ONE_USER,
      payload: { id, name, email, address: { city } },
    });
    dispatch({ type: DELETE_MODAL_STATE, payload: true });
  };

  return (
    <Grid
      container
      columns={7}
      sx={{
        ...commonStyles,
        borderBottom: 0,
        borderRight: 0,
        borderLeft: 0,
        textAlign: "center",
        columns: {
          xs:2
        }
      }}
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
    >
      <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
        <p>{id}</p>
      </Grid>
      <Grid item md={1} xs={"auto"}>
        <p>{name}</p>
      </Grid>
      <Grid item md={1} xs={"auto"}>
        <p>{username}</p>
      </Grid>
      <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
        <p>{email}</p>
      </Grid>
      <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
        <p>{address.city}</p>
      </Grid>

      <Grid item xs={"auto"} md={1} display="flex" justifyContent={"space-between"} marginRight={1}>
        <Button
          onClick={handleEdit}
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#ede665",
            ":hover": {
              backgroundColor: "#edb065",
            },
          }}
        >
          edit
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default User;
