import React from "react";
import Items from "./Items";

const Feeds = ({ titles, items }) => {
  const feeds = titles.map((item) => {
    const { name, id, isaudio } = item;
    //filter items
    console.log(`${name}=${isaudio}`);
    let filteredItems = items.filter((i) => {
      //console.log(`${i.feedid}=${id}`);
      return i.feedid === id;
    });

    return (
      <React.Fragment key={id}>
        <h2>{name}</h2>
        <Items id={id} key={id} items={filteredItems} isaudio={isaudio} />
      </React.Fragment>
    );
  });
  return <div>{feeds}</div>;
};
export default Feeds;
