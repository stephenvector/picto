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
  defaultIconContext
} from "../src";

import "./index.css";

function Icons() {
  return (
    <div className="Icons">
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

      <IconProvider theme={defaultIconContext}>
        <Icons />
      </IconProvider>

      <div>
        <pre>
          <code>{`
npm install --save @stephenvector/picto

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
  defaultIconContext
} from "@stephenvector/picto";

// Override attributes by creating a customized theme
type IconConfig = {
  capStyle: "round" | "square";
  gridSize: number;
  color: string;
  size: number | string;
  strokeWidth: number;
  lineJoin: "round" | "bevel" | "miter" | "inherit";
};

const customTheme = {...defaultIconContext};

customTheme.color = "004

<IconProvider theme={customTheme}>
  <AlignLeft />
</IconProvider>
`}</code>
        </pre>
      </div>
    </div>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
