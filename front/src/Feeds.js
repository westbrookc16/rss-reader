import React from "react";
import Feed from "./Feed";

const Feeds = ({ onDelete, titles }) => {
  //const [items, setITems] = useState([]);
  const feeds = titles.map((item) => {
    const { name, id, isaudio } = item;
    return (
      <Feed
        key={id}
        name={name}
        id={id}
        isaudio={isaudio}
        onDelete={onDelete}
      />
    );
  });
  return <div>{feeds}</div>;
};
export default Feeds;
