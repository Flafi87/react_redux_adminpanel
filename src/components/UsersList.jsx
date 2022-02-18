import React from "react";
import User from "./User.jsx";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { SMALL_SCREEN } from "../redux/types/index.js";
import { useDispatch } from "react-redux";

import Header from "./Header.jsx";

const UsersList = () => {
  const users = useSelector((state) => state.adminPanel.users);
  const loading = useSelector((state) => state.adminPanel.loading);
  const dispatch = useDispatch();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  dispatch({
    type: SMALL_SCREEN,
    payload: smallScreen,
  });

  const usersGrid =
    users.length !== 0 ? (
      users.map((user) => (
        <User user={user} key={user.id} smallScreen={smallScreen} />
      ))
    ) : (
      <Box>
        <Typography>No registered users</Typography>
      </Box>
    );

  const loadingScreen = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        paddingTop: "50%",
      }}
    >
      <CircularProgress />
    </Box>
  );

  if (loading) {
    return loadingScreen;
  } else {
    return (
      <Box sx={{ flexGrow: 1 }} border={1}>
        <Header smallScreen={smallScreen} />
        {usersGrid}
      </Box>
    );
  }
};

export default UsersList;
