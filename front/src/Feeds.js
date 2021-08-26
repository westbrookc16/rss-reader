import React from "react";
import Feed from "./Feed";

const Feeds = ({ titles }) => {
  //const [items, setITems] = useState([]);
  const feeds = titles.map((item) => {
    const { name, id, isaudio } = item;
    return <Feed key={id} name={name} id={id} isaudio={isaudio} />;
  });
  return <div>{feeds}</div>;
};
export default Feeds;
