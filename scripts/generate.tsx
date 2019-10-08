import path from "path";
import fs from "fs-extra";
import React from "react";
import ReactDOMServer from "react-dom/server";
import svgr from "@svgr/core";

import { IconSettingsContext, defaultSettings } from "../src";

import AngledArrow from "../src/icons/AngledArrow";
import Minus from "../src/icons/Minus";
import Plus from "../src/icons/Plus";
import Cancel from "../src/icons/Cancel";

const libPath = path.resolve(__dirname, "../lib");

// Ensure output directory exists and is empty
fs.emptyDirSync(path.resolve(libPath));

function createIcon(componentName: string, element: React.ReactElement) {
  const svgCode = ReactDOMServer.renderToStaticMarkup(
    <IconSettingsContext.Provider value={defaultSettings}>
      {element}
    </IconSettingsContext.Provider>
  );

  fs.writeFileSync(path.resolve(libPath, `${componentName}.svg`), svgCode);
}

createIcon("ArrowUp", <AngledArrow angle={90} />);
createIcon("ArrowRight", <AngledArrow angle={0} />);
createIcon("ArrowDown", <AngledArrow angle={270} />);
createIcon("ArrowLeft", <AngledArrow angle={180} />);
createIcon("Minus", <Minus />);
createIcon("Plus", <Plus />);
createIcon("Cancel", <Cancel />);
