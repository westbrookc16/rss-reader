import React from "react";
import ReactAudioPlayer from "react-audio-player";
const Items = ({ items, isaudio }) => {
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
        {isaudio && <ReactAudioPlayer src={url} loop={false} controls />}
      </React.Fragment>
    );
  });

  return <>{displayItems}</>;
};
export default Items;
