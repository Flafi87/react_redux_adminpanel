import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from 'react-redux';
import { MODAL_STATE } from "../redux/types";


const HeaderMenu = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        return(
            dispatch({ type: MODAL_STATE,payload:{open:true,title:"Add new user"}})
        );

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
        <Grid item xs="auto">
          <Typography variant="h4" component={"div"}>
            UsersList
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="conatined"
            color="primary"
            onClick={handleClick}
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
        columns={{ xs: 3, sm: 4, md: 7 }}
        sx={{ textAlign: 'center' }}
      >
        <Grid item   >
          ID
        </Grid>
        <Grid item  >
          Name
        </Grid>
        <Grid item  >
          Username
        </Grid>
        <Grid item  >
          Email
        </Grid>
        <Grid item  >
          City
        </Grid>
        <Grid item  >
          edit
        </Grid>
        <Grid item  >
          delete
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default HeaderMenu;
