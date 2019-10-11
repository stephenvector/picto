import React from "react";
import { useIconConfig } from "./IconContext";

function Cancel() {
  const { size, gridSize, strokeWidth, capStyle, color } = useIconConfig();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <polyline
        points={`${strokeWidth * 2},${strokeWidth * 2} ${gridSize -
          strokeWidth * 2},${gridSize - strokeWidth * 2}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <polyline
        points={`${strokeWidth * 2},${gridSize - strokeWidth * 2} ${gridSize -
          strokeWidth * 2},${strokeWidth * 2}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default Cancel;
