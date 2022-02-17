import React from "react";
import UsersList from "./UsersList.jsx";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditUserModal from "./modals/EditUserModal.jsx";
import DeleteUserModal from "./modals/DeleteUserModal.jsx";


const Dashboard = () => {
  return (
    <Box>
    <Typography variant="h2" component="div" gutterBottom>Dashboard</Typography>
      <UsersList />
      <EditUserModal/>
      <DeleteUserModal/>
    </Box>
  );
};

export default Dashboard;
