import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <NavLink to="/profile">Profile</NavLink>
      <br />
      Welcome to my fancy rss reader
    </div>
  );
};
export default Home;
