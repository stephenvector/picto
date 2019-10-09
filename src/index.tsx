import { createContext } from "react";

export type IconSettings = {
  iconGridSize: number;
  color: string;
  margin: number;
  arrowAngle: number;
  strokeWidth: number;
};

export const defaultSettings: IconSettings = {
  iconGridSize: 64,
  color: "#000",
  margin: 8,
  arrowAngle: 90,
  strokeWidth: 6
};

export const IconSettingsContext = createContext<IconSettings>(defaultSettings);

import path from "path";
import fs from "fs-extra";
import React from "react";
import ReactDOMServer from "react-dom/server";
import svgr from "@svgr/core";
import { transform } from "@babel/core";

import AngledArrow from "./icons/AngledArrow";
import Minus from "./icons/Minus";
import Plus from "./icons/Plus";
import Cancel from "./icons/Cancel";

const libPath = path.resolve(__dirname, "../lib");

// Ensure output directory exists and is empty
fs.emptyDirSync(path.resolve(libPath));

fs.ensureFileSync(path.resolve(libPath, "index.js"));

function createIcon(componentName: string, element: React.ReactElement) {
  const svgCode = ReactDOMServer.renderToStaticMarkup(
    <IconSettingsContext.Provider value={defaultSettings}>
      {element}
    </IconSettingsContext.Provider>
  );

  const jsxCode = svgr.sync(svgCode, { icon: true }, { componentName });

  const cjsCode = transform(jsxCode, {
    sourceMaps: "inline",

    presets: ["@babel/preset-react", "@babel/preset-env"],
    plugins: ["transform-es2015-modules-commonjs"]
  });

  fs.emptyDirSync(path.resolve(libPath, `${componentName}/`));

  if (cjsCode !== null) {
    fs.appendFileSync(
      path.resolve(libPath, `./index.js`),
      `export { default as ${componentName} } from "./${componentName}";`
    );

    fs.writeFileSync(
      path.resolve(libPath, `${componentName}/index.js`),
      cjsCode.code
    );
  }

  fs.writeFileSync(path.resolve(libPath, `${componentName}.svg`), svgCode);
}

createIcon("ArrowUp", <AngledArrow angle={90} />);
createIcon("ArrowRight", <AngledArrow angle={0} />);
createIcon("ArrowDown", <AngledArrow angle={270} />);
createIcon("ArrowLeft", <AngledArrow angle={180} />);
createIcon("Minus", <Minus />);
createIcon("Plus", <Plus />);
createIcon("Cancel", <Cancel />);

const indexFileContent = fs
  .readFileSync(path.resolve(libPath, "index.js"))
  .toString();

const cjsCode = transform(indexFileContent, {
  sourceMaps: "inline",
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: ["transform-es2015-modules-commonjs"]
});

if (cjsCode !== null) {
  fs.writeFileSync(path.resolve(libPath, `./index.js`), cjsCode.code);
}
