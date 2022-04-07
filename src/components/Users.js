import React from "react";
import { Outlet } from "react-router-dom";

import "./Users.css";

const Users = () => {
  return (
    <>
      <h1>Users</h1>
      <Outlet />
    </>
  );
};

export default Users;
