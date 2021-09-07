import React, { useEffect } from "react";
import Feed from "./Feed";

const DisplayFeeds = ({ titles, deleteFeed }) => {
  useEffect(() => {
    document.title = `View  Stories`;
  }, []);

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
