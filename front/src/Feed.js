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
  const [hide, setHide] = React.useState(true);
  const hideToggle = () => setHide((h) => (h ? false : true));
  return (
    <>
      <h2>{name}</h2>
      <button onClick={hideToggle}>{hide ? `Hide` : `Show`}</button>
      {hide && <Items items={items} isaudio={isaudio} />}
    </>
  );
};
export default Feed;
