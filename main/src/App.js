import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Issue from "./Components/Issue";
import Login from "./Components/Login";
import Register from "./Components/Register";
import IssueEdit from "./Components/IssueEdit";
import IssueAdd from "./Components/IssueAdd";
import PostContextProvider from "./contexts/PostContext";

import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <PostContextProvider>
          <PrivateRoute path="/protected" component={Issue} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-post" component={IssueAdd} />
          <Route path="/edit-post/:id" component={IssueEdit} />
        </PostContextProvider>
      </div>
    </>
  );
}

export default App;
