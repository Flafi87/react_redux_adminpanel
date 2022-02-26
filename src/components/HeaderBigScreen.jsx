import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { MODAL_STATE, SORT_BY_USERNAME } from "../redux/types";
import SortIcon from "@mui/icons-material/Sort";

const HeaderBigScreen = () => {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    return dispatch({
      type: MODAL_STATE,
      payload: { open: true, title: "Add new user" },
    });
  };

  const handleSortClick = () => {
    return dispatch({
      type: SORT_BY_USERNAME,
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
            onClick={handleAddUser}
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
        sx={{ textAlign: "center" }}
      >
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            ID
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            Name
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Typography variant="h6" component={"h6"}>
              Username
            </Typography>
            <Button>
              <SortIcon onClick={handleSortClick} />
            </Button>
          </Box>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            E-mail
          </Typography>
        </Grid>
        <Grid item md={1}>
          <Typography variant="h6" component={"h6"}>
            City
          </Typography>
        </Grid>
        <Grid item md={1} display="flex" justifyContent={"space-between"}>
          <Typography variant="h6" component={"h6"} px={1}>
            Edit
          </Typography>
          <Typography variant="h6" component={"h6"} px={3}>
            Delete
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderBigScreen;
