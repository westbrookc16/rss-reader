import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          {JSON.stringify(user)}
        </div>
      )}
    </div>
  );
};

export default Profile;
