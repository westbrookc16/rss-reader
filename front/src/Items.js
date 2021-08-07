import React, { useEffect, useState } from "react";
import { callApi } from "./utils/fetch";
const Items = ({ id }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      if (id === null) return;
      console.log(`fetching data`);
      const res = await callApi(`/api/items/${id}`, `get`);
      setItems(res);
    }
    fetchData();
  }, [id]);
  const displayItems = items.map((item) => {
    const { id, title, url, description } = item;
    return (
      <React.Fragment key={id}>
        <h3>
          <a rel="noreferrer" target="_blank" href={url}>
            {title}
          </a>
        </h3>
        {description} <br />
      </React.Fragment>
    );
  });

  return <>{displayItems}</>;
};
export default Items;
