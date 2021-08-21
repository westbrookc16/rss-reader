import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { callApi } from "./utils/fetch";
const AddPodcast = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const { user } = useContext(UserContext);
  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await callApi(
      `https://itunes.apple.com/search?term=${encodeURIComponent(
        search
      )}&media=podcast`
    );
    setResults(data.results);
  };
  const subscribe = async (url, name) => {
    const data = { name, url };
    data.isAudio = true;
    const res = await callApi(`api/feeds/${user.dbID}`, "post", data);
    console.log(res);
  };
  const lis = results.map((item) => {
    const { collectionId, trackName, feedUrl } = item;
    return (
      <li key={collectionId}>
        {trackName}
        <button
          id="btnSubscribe"
          onClick={(e) => {
            subscribe(feedUrl, trackName);
          }}
        >
          Subscribe
        </button>
      </li>
    );
  });

  return (
    <div>
      <label htmlFor="search">Enter Search Terms</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>{lis}</ul>
    </div>
  );
};
export default AddPodcast;
