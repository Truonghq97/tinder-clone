import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import TinderCards from "./components/tinderCard/TinderCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            {/* Tinder Cards */}
            <TinderCards />
            {/* Buttons below tinder cards */}
            {/* Chats screen */}
            {/* Individual chat screen */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
