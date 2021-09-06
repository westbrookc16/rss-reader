import React, { useContext, useState, useEffect } from "react";
import Feed from "./Feed";
import { callApi } from "./utils/fetch";

import { UserContext } from "./UserContext";
const DisplayFeeds = () => {
  useEffect(() => {
    document.title = `View  Stories`;
  }, []);
  const [titles, setTitles] = useState([]);
  const { user } = useContext(UserContext);
  //get feeds

  useEffect(() => {
    async function fetch() {
      try {
        if (!user.dbID) return;
        const res = await callApi(`/api/feeds/${user.dbID}`, "get");
        setTitles(res);
        console.dir(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, [user]);
  const deleteFeed = async (id) => {
    await callApi(`/api/feeds/${id}/${user.dbID}`, `delete`);
    setTitles((feeds) => feeds.filter((f) => f.id !== id));
  };

  const feeds = titles.map((item) => {
    const { name, id, isaudio } = item;
    return (
      <Feed
        key={id}
        name={name}
        id={id}
        isaudio={isaudio}
        onDelete={deleteFeed}
      />
    );
  });

  return (
    <div>
      <h1>View Stories</h1>

      {feeds}
    </div>
  );
};
export default DisplayFeeds;
