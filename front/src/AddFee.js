import React, { useState, useEffect, useContext } from "react";
import { callApi } from "./utils/fetch";
import { LiveMessage } from "react-aria-live";
import { UserContext } from "./UserContext";
const AddFeed = () => {
  useEffect(() => {
    document.title = `add Feed`;
  }, []);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);
  const onChange = (e) => {
    setUrl(e.target.value);
  };
  const onClick = async (e) => {
    const res = await callApi(`/api/feeds/${user.dbID}`, "post", { url });
    if (res.feed.name) {
      alert(`${res.feed.name} was added successfully.`);
    } else {
      alert("an error occurred, please try again.");
    }
  };
  function validURL(str) {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  }
  //fetch info for feed when textbox changes, for now.
  useEffect(() => {
    async function getData() {
      if (!validURL(url)) return;
      const data = { url };
      const resData = await callApi("/api/rss/info", "post", data);
      setName(resData.title);
      setDescription(resData.description);
    }
    getData();
  }, [url]);
  return (
    <div>
      <label htmlFor="feed">Feed Url</label>
      <input type="text" id="feed" value={url} onChange={onChange} name="url" />
      <br />

      <button onClick={onClick}>Add</button>
      <div>
        name:{name}
        <br />
        Description:{description}
      </div>
      <LiveMessage message={name} aria-live="polite" />
    </div>
  );
};
export default AddFeed;
