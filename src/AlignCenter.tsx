import React from "react";
import { useIconConfig } from "./IconContext";

function AlignCenter() {
  const { size, gridSize, strokeWidth, capStyle, color } = useIconConfig();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <line
        x1={strokeWidth}
        y1={strokeWidth}
        x2={gridSize - strokeWidth}
        y2={strokeWidth}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        x1={strokeWidth + (gridSize - 2 * strokeWidth)/4}
        y1={strokeWidth + (gridSize - 2 * strokeWidth)/4}
        x2={strokeWidth + (gridSize - 2 * strokeWidth)/4*3}
        y2={strokeWidth + (gridSize / 2 - strokeWidth) / 2}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        x1={strokeWidth}
        y1={gridSize / 2}
        x2={gridSize - strokeWidth}
        y2={gridSize / 2}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        x1={strokeWidth + (gridSize - 2 * strokeWidth)/4}
        y1={gridSize / 2 + (gridSize / 2 - strokeWidth) / 2}
        x2={strokeWidth + (gridSize - 2 * strokeWidth)/4*3}
        y2={gridSize / 2 + (gridSize / 2 - strokeWidth) / 2}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <line
        x1={strokeWidth}
        y1={gridSize - strokeWidth}
        x2={gridSize - strokeWidth}
        y2={gridSize - strokeWidth}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default AlignCenter;
