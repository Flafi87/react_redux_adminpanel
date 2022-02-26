import React from "react";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { MODAL_STATE, GET_ONE_USER, DELETE_MODAL_STATE } from "../redux/types";

const commonStyles = {
  border: 1,
  borderColor: "text.primary",
};

const UserBigScreen = ({ user }) => {
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
          xs: 2,
        },
      }}
      justifyContent="space-between"
      alignItems="center"
      wrap="wrap"
    >
      <Grid item md={1}>
        <p>{id}</p>
      </Grid>
      <Grid item md={1}>
        <p>{name}</p>
      </Grid>
      <Grid item md={1}>
        <p>{username}</p>
      </Grid>
      <Grid item md={1}>
        <p>{email}</p>
      </Grid>
      <Grid item md={1}>
        <p>{city}</p>
      </Grid>

      <Grid item md={1} display="flex" justifyContent={"space-between"}>
        <Button
          onClick={handleEdit}
          variant="contained"
          sx={{
            color: "white",
            backgroundColor: "#edb065",
            ":hover": {
              backgroundColor: "#f28704",
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

UserBigScreen.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
  }),
};

export default UserBigScreen;
