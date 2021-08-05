import React, { useContext, useState, useEffect } from "react";

import { callApi } from "./utils/fetch";
import Feeds from "./Feeds";
import { UserContext } from "./UserContext";
const DisplayFeeds = () => {
  const [titles, setTitles] = useState([]);
  const { user } = useContext(UserContext);
  //eslint-disable-next-line
  const [reload, setReload] = useState(0);
  useEffect(() => {
    async function fetch() {
      try {
        const res = await callApi(`/api/feeds/${user.dbID}`, "get");
        setTitles(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, [user.dbID]);
  const updateStories = async (e) => {
    await callApi("/api/backgroundFetch", "get");
    alert("successs.");
    setReload(1);
    setReload(0);
  };
  return (
    <div>
      <h1>View Stories</h1>
      <button onClick={updateStories}>Update Stories</button>
      <Feeds titles={titles} reload={reload} />
    </div>
  );
};
export default DisplayFeeds;
