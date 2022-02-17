import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { MODAL_STATE } from "../redux/types";

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch({
      type: MODAL_STATE,
      payload: { open: true, title: "Add new user" },
    });
  };

  return (
    <Box className="header">
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={1}
      >
        <Grid item xs="auto" margin={3}>
          <Typography variant="h4" component={"div"}>
            UsersList
          </Typography>
        </Grid>
        <Grid item xs="auto" margin={3}>
          <Button
            variant="conatined"
            onClick={handleClick}
            size="large"
            sx={{
              color: "white",
              backgroundColor: "#04aef2",
              ":hover": {
                backgroundColor: "#0485ef",
              },
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        columns={7}
        sx={{ textAlign: "center"}}
      >
        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
          <Typography variant="h6" component={"h6"} >
            ID
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            Name
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            Username
          </Typography>
        </Grid>
        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
          <Typography variant="h6" component={"h6"}>
            E-mail
          </Typography>
        </Grid>
        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} >
          <Typography variant="h6" component={"h6"}>
            City
          </Typography>
        </Grid>
        <Grid item xs={2} md={1}display="flex" justifyContent={"space-between"}>
          <Typography variant="h6" component={"h6"} px={1} sx={{ display: { xs: 'none', md: 'block' } }}>
            Edit
          </Typography>
          <Typography variant="h6" component={"h6"} px={3} sx={{ display: { xs: 'none', md: 'block' } }}>
            Delete
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderMenu;
