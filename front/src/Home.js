import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "./UserContext";
import { callApi } from "./utils/fetch";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchUserInDb() {
      if (isLoading || !isAuthenticated) return;
      const res = await callApi("/api/users", "post", user);

      const data = { ...user, dbID: res[0].id };

      //update context here.
      setUser(data);
    }

    fetchUserInDb();
  }, [isAuthenticated, isLoading, user, setUser]);

  return (
    <div>
      <NavLink to="/profile">Profile</NavLink>
      <br />
      Welcome to my fancy rss reader
    </div>
  );
};
export default Home;
