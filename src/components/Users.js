import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import {v4 as uuidv4} from "uuid";

import { getUsers } from "../redux/actions";
import "./Users.css";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, getUsers]);

  const users = useSelector(state => state.users)

  return(
    <>
      <h1>Users</h1>
      <ul className="users__list">
        {
          users.map(user => <User user={ user } key={ uuidv4() } />)
        }
      </ul>
    </>
  )
}

export default Users;
