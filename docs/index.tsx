import React from "react";
import ReactDOM from "react-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

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

const customTheme = { ...defaultIconContext };

customTheme.color = "#00b";
customTheme.size = "8rem";
customTheme.capStyle = "square";
customTheme.strokeWidth = 6;

function Code({ code, language = "tsx" }: { code: string; language?: string }) {
  return (
    <SyntaxHighlighter language={language} style={prism}>
      {code}
    </SyntaxHighlighter>
  );
}

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
        <p>
          Customizable React icon components. Generated using simple geometry,
          not drawn.
        </p>
        <a href="https://github.com/stephenvector/picto">
          View source on GitHub
        </a>
      </header>

      <IconProvider theme={defaultIconContext}>
        <Icons />
      </IconProvider>

      <div>
        <h2>Installation</h2>
        <Code code={`npm install --save @stephenvector/picto@latest`} />
      </div>

      <div>
        <h2>Usage</h2>
        <Code
          code={`// App.js

import { AlignCenter } from "@stephenvector/picto";

export default function App() {
  return (
    <div>
      <AlignCenter /> Align Center
    </div>
  )
}
`}
        />

        <h2>Customization</h2>
        <Code
          code={`export const defaultIconContext: IconConfig = {
  color: "#000",
  capStyle: "round",
  gridSize: 128,
  size: "1em",
  strokeWidth: 9,
  lineJoin: "round"
};

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

customTheme.color = "#00b";
customTheme.size = "8rem";
customTheme.capStyle = "square";
customTheme.strokeWidth = 6;

<IconProvider theme={customTheme}>
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
</IconProvider>
`}
        />
        <p>
          <strong>Preview:</strong>
        </p>
        <IconProvider theme={customTheme}>
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
        </IconProvider>
      </div>
    </div>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
