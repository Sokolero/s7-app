import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const User = ({ user }) => {
  return (
    <li>
      <NavLink to={`${user.id}`} className="users__item">
        <img src={user.avatar} alt="avatar" />
        <span className="users__info">
          {user.first_name} {user.last_name}
        </span>
        <span className="users__email">{user.email}</span>
      </NavLink>
    </li>
  );
};

export default User;
