import path from "path";
import fs from "fs-extra";
import React from "react";
import ReactDOMServer from "react-dom/server";
import svgr from "@svgr/core";

import { IconSettingsContext, defaultSettings } from "../src";
import AngledArrow from "../src/icons/AngledArrow";

const libPath = path.resolve(__dirname, "../lib");
const svgPath = path.resolve(libPath, "./svg");
const componentsPath = path.resolve(libPath, "./components");

// Ensure output directory exists and is empty
fs.emptyDirSync(path.resolve(libPath));
fs.emptyDirSync(svgPath);
fs.emptyDirSync(componentsPath);

function createIcon(componentName: string, element: React.ReactElement) {
  const svgCode = ReactDOMServer.renderToStaticMarkup(
    <IconSettingsContext.Provider value={defaultSettings}>
      {element}
    </IconSettingsContext.Provider>
  );

  const jsxCode = svgr.sync(svgCode, {}, { componentName });

  fs.writeFileSync(path.resolve(svgPath, `${componentName}.svg`), svgCode);

  fs.writeFileSync(
    path.resolve(componentsPath, `${componentName}.js`),
    jsxCode
  );
}

createIcon("ArrowDown", <AngledArrow angle={270} />);
