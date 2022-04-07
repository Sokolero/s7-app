import React from "react";
import { useDispatch, useSelector } from "react-redux";

const User = ({ user }) => {

  return(
    <li className="users__item">
      <img src={ user.avatar } alt="avatar"/>
      <span className="users__info">{ user.first_name } { user.last_name }</span>
      <span className="users__email">{ user.email }</span>
    </li>
  )
}

export default User;
