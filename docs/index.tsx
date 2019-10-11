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
  IconProvider,
  DefaultIconContext
} from "../src";
import { IconConfig } from "../src/types";

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
    <div>
      <IconProvider value={inverseConfig}>
        <Icons />
      </IconProvider>
    </div>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
