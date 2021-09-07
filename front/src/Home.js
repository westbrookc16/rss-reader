import React, { useContext, useEffect, useState } from "react";
import { callApi } from "./utils/fetch";
import { NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";

const Home = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    document.title = `Home`;
  }, []);
  const [feeds, setFeeds] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (!user.dbID) return;
      const feeds = await callApi(`/api/feeds/${user.dbID}`);
      setFeeds(feeds);
    }
    fetchData();
  }, [user.dbID]);
  const feedsMap = feeds.map((item) => {
    const { id, name } = item;
    return (
      <li key={id}>
        <NavLink to={`/all/${id}`}>{name}</NavLink>
      </li>
    );
  });
  return (
    <div>
      <h2>View Archived Stories</h2>
      <ul>{feedsMap}</ul>
      Welcome to my RSS reader. RSS stands for really simple syndication. This
      is a format offered by most publications that allows you to grab stories
      from that publication's website without having to go to the website of
      that publication and search for them. You can therefore make your own
      newspaper. Simply google the name of your favorite publication and rss to
      see a list of feeds that publication may offer.
    </div>
  );
};
export default Home;
