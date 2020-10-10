import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import TinderCards from "./components/tinderCard/TinderCards";
import SwipeButtons from "./components/swipeButton/swipeButtons";
import Chats from "./components/chats/Chats";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <Chats />
            <h1>It works</h1>
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            <SwipeButtons />

            {/* Individual chat screen */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
