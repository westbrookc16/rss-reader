import React, { useState } from "react";

export const UserContext = React.createContext({});

export function UserData(props) {
  const [user, setUser] = useState({});
  // const updateUser = (incomingUser) => {
  //   setUser(incomingUser);
  //   console.log(`user=${JSON.stringify(incomingUser)}`);
  // };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
