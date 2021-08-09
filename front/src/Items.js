import React from "react";

const Items = ({ items }) => {
  console.log(`items=${items.length}`);
  const displayItems = items.map((item) => {
    const { id, title, url, description } = item;
    return (
      <React.Fragment key={id}>
        <h3>
          <a rel="noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h3>
        <div dangerouslySetInnerHTML={{ __html: description }}></div> <br />
      </React.Fragment>
    );
  });

  return <>{displayItems}</>;
};
export default Items;
