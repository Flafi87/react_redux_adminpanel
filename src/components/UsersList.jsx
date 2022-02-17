import React from "react";
import User from "./User.jsx";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import Header from "./Header.jsx";

const UsersList = () => {
  const users = useSelector((state) => state.adminPanel.users);
  const loading = useSelector((state) => state.adminPanel.loading);

  const usersGrid =
    users.length !== 0 ? (
      users.map((user) => <User user={user} key={user.id} />)
    ) : (
      <div>No registered users</div>
    );

    const loadingScreen =    (<Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        paddingTop: "50%",
      }}
    >
      <CircularProgress />
    </Box>);   

  if (loading) {
    return loadingScreen;
  } else {
    return (
      <Box sx={{ flexGrow: 1 }} border={1}>
        <Header />
        <Box>{usersGrid}</Box>
      </Box>
    );
  }
};

export default UsersList;
