import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./Components/Slideshow.css";
import { Slideshow } from "./Components/Slideshow";

function App() {
  return (
    <div className="App">
      <h1>Portraits</h1>
      <Slideshow />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
