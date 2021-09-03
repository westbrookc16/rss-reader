import * as React from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Items from "./Items";
import { callApi } from "./utils/fetch";
import { UserContext } from "./UserContext";
const Feed = ({ name, id, isaudio, onDelete }) => {
  const [items, setItems] = React.useState([]);
  const user = React.useContext(UserContext);
  const [showModal, setShowModal] = React.useState(false);
  const close = () => {
    setShowModal(false);
  };
  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await callApi(`/api/items/${id}/${user.dbID}`);
        setItems(data);
      } catch (e) {
        console.log(e.stack);
      }
    }
    fetchData();
  }, [id, user.dbID]);
  const [hide, setHide] = React.useState(true);
  const hideToggle = () => setHide((h) => (h ? false : true));
  if (items.length === 0) return null;
  return (
    <>
      <h2>{name}</h2>
      <button onC zlick={hideToggle}>
        {hide ? `Hide` : `Show`}
      </button>

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
