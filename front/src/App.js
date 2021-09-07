import Menu from "./Menu";
import { UserData } from "./UserContext";
import AllStories from "./AllStories";

import AddFeed from "./AddFee";
import Profile from "./Profile";
import Home from "./Home";
import DisplayFeeds from "./DisplayFeeds";
import "./App.css";
import AddPodcast from "./AddPodcast";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <UserData>
      <div className="App">
        <Router>
          <nav>
            <Menu />
          </nav>
          <main>
            <Switch>
              <Route path="/all/:id">
                <AllStories />
              </Route>
              <Route path="/feeds">
                <DisplayFeeds />
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
    </UserData>
  );
}

export default App;
