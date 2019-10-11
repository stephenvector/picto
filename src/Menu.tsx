import React from "react";
import { useIconConfig } from "./IconContext";

function Menu() {
  const { size, gridSize, strokeWidth, capStyle, color } = useIconConfig();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <line
        y1={gridSize / 2 - 4 * strokeWidth}
        x1={strokeWidth}
        y2={gridSize / 2 - 4 * strokeWidth}
        x2={gridSize-strokeWidth}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        y1={gridSize / 2}
        x1={strokeWidth}
        y2={gridSize / 2}
        x2={gridSize-strokeWidth}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        y1={gridSize / 2 + 4 * strokeWidth}
        x1={strokeWidth}
        y2={gridSize / 2 + 4 * strokeWidth}
        x2={gridSize-strokeWidth}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />

    </svg>
  );
}

export default Menu;
