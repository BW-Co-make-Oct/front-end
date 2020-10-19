import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Issue from "./Components/Issue";
import Login from "./Components/Login";
import Register from "./Components/Register";
import IssueEdit from "./Components/IssueEdit";

import PostContextProvider from "./contexts/PostContext";

import PrivateRoute from "./PrivateRoute";

function App() {
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
        <PostContextProvider>
          <PrivateRoute path="/protected" component={Issue} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/edit-post" component={IssueEdit} />
        </PostContextProvider>
      </div>
    </>
  );
}

export default App;
