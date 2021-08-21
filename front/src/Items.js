import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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
        {isaudio && <AudioPlayer src={url} />}
      </React.Fragment>
    );
  });

  return <>{displayItems}</>;
};
export default Items;
