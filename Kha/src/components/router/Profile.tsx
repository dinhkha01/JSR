import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id, name } = useParams();
  return (
    <div>
      <h1>
        {id} : {name}
      </h1>
    </div>
  );
};

export default Profile;
