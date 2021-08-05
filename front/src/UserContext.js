import React, { useState, useEffect } from "react";
import { callApi } from "./utils/fetch";
import { useAuth0 } from "@auth0/auth0-react";
export const UserContext = React.createContext({});

export function UserData(props) {
  const [retrievedUser, setRetrievedUser] = useState({});
  const { user, isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    async function fetchUserInDb() {
      if (isLoading || !isAuthenticated) return;
      const res = await callApi("/api/users", "post", user);

      const data = { ...user, dbID: res[0].id };

      //update context here.
      setRetrievedUser(data);
    }

    fetchUserInDb();
  }, [user, isAuthenticated, isLoading, setRetrievedUser]);

  return (
    <UserContext.Provider value={{ user: retrievedUser, setRetrievedUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
