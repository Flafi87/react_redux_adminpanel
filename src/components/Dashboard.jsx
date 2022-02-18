import React from "react";
import UsersList from "./UsersList.jsx";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import EditUserModal from "./modals/EditUserModal.jsx";
import DeleteUserModal from "./modals/DeleteUserModal.jsx";
import ErrorModal from "./modals/ErrorModal.jsx";
import store from "../redux/store/store.js";


const Dashboard = () => {
  const error = useSelector((state) => state.adminPanel.error);
  return (
    <Box>
    <Typography variant="h2" component="div" gutterBottom>Dashboard</Typography>
      <UsersList />
      <EditUserModal/>
      <DeleteUserModal/>
      {error ? <ErrorModal/> : null}
    </Box>
  );
};

export default Dashboard;
