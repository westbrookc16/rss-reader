import React from "react";
import Items from "./Items";

const Feeds = ({ titles, reload }) => {
  const feeds = titles.map((item) => {
    const { name, id } = item;
    return (
      <React.Fragment key={id}>
        <h2>{name}</h2>
        <Items id={id} key={id} reload={reload} />
      </React.Fragment>
    );
  });
  return <div>{feeds}</div>;
};
export default Feeds;
