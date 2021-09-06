import * as React from "react";
import Items from "./Items";
import { callApi } from "./utils/fetch";
import { useParams } from "react-router-dom";

const AllStories = () => {
  const { id } = useParams();

  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const data = await callApi(`/api/items/${id}`);
      setItems(data);
      document.title = data[0].name;
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>All Stories</h1>
      <h2>{items[0]?.name}</h2>
      <Items items={items} isaudio={false} />
    </div>
  );
};
export default AllStories;
