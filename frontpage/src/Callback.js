import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import { callApi } from "./utils/fetch";
import { useAuth0 } from "@auth0/auth0-react";
const Callback = () => {
  const { user, isLoading } = useAuth0();
  let history = useHistory();

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchUserInDb() {
      if (isLoading) return;
      const res = await callApi("/api/users", "post", user);

      const data = { ...user, dbID: res[0].id };

      //update context here.
      setUser(data);
      history.push("/profile");
    }

    fetchUserInDb();
  }, [isLoading, user, setUser, history]);

  return <div>Loading...</div>;
};
export default Callback;
