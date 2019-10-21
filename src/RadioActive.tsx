import React from "react";
import { useIconConfig } from "./IconContext";

function RadioActive() {
  const { size, gridSize, strokeWidth, capStyle, color } = useIconConfig();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <circle
        cx={gridSize / 2}
        cy={gridSize / 2}
        r={gridSize / 2 - strokeWidth}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />

      <circle
        cx={gridSize / 2}
        cy={gridSize / 2}
        r={gridSize / 2 - 3 * strokeWidth}
        stroke={color}
        fill={color}
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default RadioActive;
