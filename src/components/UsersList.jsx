import React from "react";
import User from "./User.jsx";
import { useSelector } from "react-redux";

const UsersList = () => {
  const users = useSelector((state) => state.adminPanel.users);

  return (
    <>
      <div className="header">
        <div>UsersList</div>
        <button>Add New</button>
      </div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default UsersList;
