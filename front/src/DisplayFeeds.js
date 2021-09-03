import React, { useContext, useState, useEffect } from "react";

import { callApi } from "./utils/fetch";
import Feeds from "./Feeds";
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
  return (
    <div>
      <h1>View Stories</h1>

      <Feeds titles={titles} onDelete={deleteFeed} />
    </div>
  );
};
export default DisplayFeeds;
