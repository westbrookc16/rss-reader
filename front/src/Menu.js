import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LogInButton";
import LogoutButton from "./LogOut";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  return (
    <div>
      {!isLoading && (
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/feeds">View Feeds/podcasts</NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <NavLink to="/addfeed">Add Feed</NavLink>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <NavLink to="/addpodcast">Add Podcast</NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <LoginButton />
            </li>
          )}

          {isAuthenticated && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Menu;
