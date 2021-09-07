import * as React from "react";
import AddFeed from "./AddFee";
import { useAuth0 } from "@auth0/auth0-react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import LoginButton from "./LogInButton";
import LogoutButton from "./LogOut";
import { NavLink } from "react-router-dom";
import AddPodcast from "./AddPodcast";

const Menu = ({ onAdd }) => {
  const { isLoading, isAuthenticated } = useAuth0();
  const [addFeed, setAddFeed] = React.useState(false);
  const [addPodcast, setAddPodcast] = React.useState(false);
  const onClosePodcast = () => {
    setAddPodcast(false);
  };
  const onClose = () => {
    setAddFeed(false);
  };
  return (
    <div>
      {!isLoading && (
        <ul id="mainmenu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {isAuthenticated && (
            <li>
              <NavLink to="/feeds">View Feeds/podcasts</NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button
                onClick={(e) => {
                  setAddFeed(true);
                }}
              >
                add Feed
              </button>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <button
                onClick={(e) => {
                  setAddPodcast(true);
                }}
              >
                add Podcast
              </button>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <LoginButton />
            </li>
          )}

          {isAuthenticated && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      )}

      <Dialog isOpen={addFeed}>
        <AddFeed onClose={onClose} onAdd={onAdd} />
      </Dialog>
      <Dialog isOpen={addPodcast}>
        <AddPodcast onAdd={onAdd} onClose={onClosePodcast} />
      </Dialog>
    </div>
  );
};

export default Menu;
