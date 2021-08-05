import logo from "./logo.svg";
import Menu from "./Menu";
import { UserData } from "./UserContext";
import Callback from "./Callback";
import AddFeed from "./AddFee";
import Profile from "./Profile";
import Home from "./Home";
import DisplayFeeds from "./DisplayFeeds";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <UserData>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <nav>
            <Menu />
          </nav>
          <main>
            <Switch>
              <Route path="/callback">
                <Callback />
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