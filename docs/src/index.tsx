import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import {
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  Minus,
  Plus,
  Cancel
} from "@stephenvector/picto";

function App() {
  return (
    <div className="App">
      <h1>picto</h1>
      <p>svg icons that are generated, not drawn</p>
      <p>
        <ArrowUp />
      </p>
      <p>
        <ArrowRight />
      </p>
      <p>
        <ArrowDown />
      </p>
      <p>
        <ArrowLeft />
      </p>
      <p>
        <Minus />
      </p>
      <p>
        <Plus />
      </p>
      <p>
        <Cancel />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
