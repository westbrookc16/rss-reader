import * as React from "react";
import Items from "./Items";
import { callApi } from "./utils/fetch";

const Feed = ({ name, id, isaudio }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await callApi(`/api/items/${id}`);
        setItems(data);
      } catch (e) {
        console.log(e.stack);
      }
    }
    fetchData();
  }, [id]);

  return (
    <>
      <h2>{name}</h2>
      <Items items={items} isaudio={isaudio} />
    </>
  );
};
export default Feed;
