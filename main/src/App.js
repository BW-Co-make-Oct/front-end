import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Issue from "./Components/Issue";

import PostContextProvider from "./contexts/PostContext";

import { getData } from "./Actions";

function App() {
  const [temp, setTemp] = useState([]);

  const upvote = (e) => {
    console.log("upvote", e);
  };
  const downvote = (e) => {
    console.log("downvote");
  };

  return (
    <>
      <Header />
      <div className="main">
        <Switch>
          <Route path="/">
            <PostContextProvider>
              <Issue />
            </PostContextProvider>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
