import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import ArrowUp from "./lib/ArrowUp.svg";
import ArrowRight from "./lib/ArrowRight.svg";
import ArrowDown from "./lib/ArrowDown.svg";
import ArrowLeft from "./lib/ArrowLeft.svg";
import Minus from "./lib/Minus.svg";
import Plus from "./lib/Plus.svg";
import Cancel from "./lib/Cancel.svg";

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
