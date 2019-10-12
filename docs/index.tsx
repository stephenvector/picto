import React from "react";
import ReactDOM from "react-dom";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Cancel,
  DragHandle,
  Plus,
  Minus,
  Menu,
  RadioActive,
  RadioInactive,
  IconProvider
} from "../src";
import { IconConfig } from "../src/types";

import "./index.css";

const inverseConfig: IconConfig = {
  color: "#fff",
  capStyle: "round",
  gridSize: 128,
  size: "3em",
  strokeWidth: 8,
  lineJoin: "round"
};

function Icons() {
  return (
    <div>
      <AlignCenter />
      <AlignJustify />
      <AlignLeft />
      <AlignRight />
      <ArrowDown />
      <ArrowLeft />
      <ArrowRight />
      <ArrowUp />
      <Cancel />
      <DragHandle />
      <Plus />
      <Minus />
      <Menu />
      <RadioActive />
      <RadioInactive />
    </div>
  );
}

function Docs() {
  return (
    <div className="Docs">
      <header>
        <h1>picto</h1>
        <p>react icons that are generated using simple geometry, not drawn</p>
        <a href="https://github.com/stephenvector/picto">
          View source on GitHub
        </a>
      </header>
      <IconProvider value={inverseConfig}>
        <Icons />
      </IconProvider>
    </div>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
