import * as React from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Items from "./Items";
import { callApi } from "./utils/fetch";

const Feed = ({ name, id, isaudio, onDelete }) => {
  const [items, setItems] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const close = () => {
    setShowModal(false);
  };
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

      <button
        onClick={(e) => {
          setShowModal(true);
        }}
      >
        Delete
      </button>
      {hide && <Items items={items} isaudio={isaudio} />}

      <Dialog isOpen={showModal} onClose={close}>
        Are you sure you want to delete {name}?
        <button
          onClick={(e) => {
            onDelete(id);
          }}
        >
          Delete
        </button>
        <button onClick={close}>No</button>
      </Dialog>
    </>
  );
};
export default Feed;
