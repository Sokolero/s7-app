import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import User from "./User";

const UserList = () => {
  const users = useSelector((state) => state.users);
  return (
    <ul className="users__list">
      {users.map((user) => (
        <User user={user} key={uuidv4()} />
      ))}
    </ul>
  );
};

export default UserList;
