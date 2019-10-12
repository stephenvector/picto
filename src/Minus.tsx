import React from "react";
import { useIconConfig } from "./IconContext";

export default function Menu() {
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
        y1={gridSize / 2}
        x2={gridSize - strokeWidth}
        y2={gridSize / 2}
        stroke={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
