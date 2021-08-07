import React from "react";
import Items from "./Items";

const Feeds = ({ titles, items }) => {
  const feeds = titles.map((item) => {
    const { name, id } = item;
    //filter items

    let filteredItems = items.filter((i) => {
      //console.log(`${i.feedid}=${id}`);
      return i.feedid === id;
    });
    console.log(`filteredITems=${filteredItems.length}`);
    return (
      <React.Fragment key={id}>
        <h2>{name}</h2>
        <Items id={id} key={id} items={filteredItems} />
      </React.Fragment>
    );
  });
  return <div>{feeds}</div>;
};
export default Feeds;
