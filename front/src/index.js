import React from "react";
import { UserData } from "./UserContext";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LiveAnnouncer } from "react-aria-live";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(
  <React.StrictMode>
    <LiveAnnouncer>
      <Auth0Provider
        domain="rss-reader.us.auth0.com"
        clientId="Xr72wW2ifM0PCpAAcTQ4MHt8htI9FkES"
        redirectUri={window.location.origin}
      >
        <UserData>
          <App />
        </UserData>
      </Auth0Provider>
    </LiveAnnouncer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
