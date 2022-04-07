import { useParams } from "react-router-dom";

const UserDetails = () => {
  let params = useParams();
  console.log("sadfdf");

  return <div>Details {params.userId} </div>;
};

export default UserDetails;
