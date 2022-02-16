import React from 'react';

const User = ({user}) => {
  const { id, name, username, email, city} = user;
  return (
    <>
    <div>{id}</div>
    <div>{name}</div>
    <div>{username}</div>
    <div>{email}</div>
    <div>{city}</div>
    </>
  );
};

export default User;