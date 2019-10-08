import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import ArrowUp from "./lib/components/ArrowUp";
import ArrowRight from "./lib/components/ArrowRight";
import ArrowDown from "./lib/components/ArrowDown";
import ArrowLeft from "./lib/components/ArrowLeft";
import Minus from "./lib/components/Minus";
import Plus from "./lib/components/Plus";
import Cancel from "./lib/components/Cancel";

function App() {
  return (
    <div className="App">
      <h1>picto</h1>
      <p>svg & react componnent icons that are generated, not drawn</p>
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
