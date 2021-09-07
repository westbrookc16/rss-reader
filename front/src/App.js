import * as React from "react";
import { UserContext } from "./UserContext";
import { callApi } from "./utils/fetch";
import Menu from "./Menu";

import AllStories from "./AllStories";

import AddFeed from "./AddFee";
import Profile from "./Profile";
import Home from "./Home";
import DisplayFeeds from "./DisplayFeeds";
import "./App.css";
import AddPodcast from "./AddPodcast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [titles, setTitles] = React.useState([]);
  const { user } = React.useContext(UserContext);
  //called when adding feeds
  const addFeed = (feed) => {
    setTitles((t) => {
      console.log(`adding`);
      return [...t, feed];
    });
  };
  //get feeds

  React.useEffect(() => {
    async function fetch() {
      try {
        if (!user.dbID) return;
        const res = await callApi(`/api/feeds/${user.dbID}`, "get");
        setTitles(res);
      } catch (e) {
        console.log(e);
      }
    }
    fetch();
  }, [user]);
  const deleteFeed = async (id) => {
    await callApi(`/api/feeds/${id}/${user.dbID}`, `delete`);
    setTitles((feeds) => feeds.filter((f) => f.id !== id));
  };

  return (
    <div className="App">
      <Router>
        <nav>
          <Menu onAdd={addFeed} />
        </nav>
        <main>
          <Switch>
            <Route path="/all/:id">
              <AllStories />
            </Route>
            <Route path="/feeds">
              <DisplayFeeds titles={titles} deleteFeed={deleteFeed} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/addFeed">
              <AddFeed />
            </Route>
            <Route path="/addPodcast">
              <AddPodcast />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
