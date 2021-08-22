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
  //get items
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        if (!user || !user.dbID) return;
        const res = await callApi(`/api/items/${user.dbID}`, `get`);
        setItems(res);
        console.log(`setting items herer.`);
      } catch (e) {
        console.log(e.stack);
      }
    }
    fetchData();
  }, [user]);

  useEffect(() => {
    async function fetch() {
      try {
        if (!user.dbID) return;
        const res = await callApi(`/api/feeds/${user.dbID}`, "get");
        setTitles(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, [user]);
  /*const updateStories = async (e) => {
    await callApi("/api/backgroundFetch", "get");
    alert("successs.");
    if (reload === 0) setReload(1);
    else setReload(0);
  };*/
  return (
    <div>
      <h1>View Stories</h1>

      <Feeds titles={titles} items={items} />
    </div>
  );
};
export default DisplayFeeds;
