import React, { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Issue from "./Components/Issue";
import { UserContext } from "./contexts/UserContext";

const startState = [
  {
    name: "Pothole",
    desc: "Pothole please fix",
    points: 22,
    id: 0,
  },
  {
    name: "Park is dirty",
    desc: "Please clean the park",
    points: 12,
    id: 1,
  },
  {
    name: "Broken mail boxes",
    desc: "Stop people from breaking boxes, and fix the ones broken",
    points: 5,
    id: 2,
  },
];

function App() {
  const [temp, setTemp] = useState(startState);
  return (
    <>
      <Header />
      <div className="main">
        <UserContext.Provider value={temp}>
          <Issue />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
