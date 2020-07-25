import React from "react";
import "./App.css";
import Matches from "./Components/Matches";
import Navigate from "./Components/Navigate";


function App() {
  return (
    <div className="App">
      <body>
        <Matches />
        <br />
        <Navigate />
        <br />
      </body>
    </div>
  );
}

export default App;
