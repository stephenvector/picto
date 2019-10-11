import React from "react";
import { useIconConfig } from "./IconContext";

function DragHandle() {
  const { size, gridSize, strokeWidth, capStyle, color } = useIconConfig();
  const offset = (gridSize - (2 * strokeWidth)) / 4;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <polyline
        points={`${strokeWidth},${gridSize/2 - strokeWidth*2} ${gridSize-strokeWidth},${gridSize/2 - strokeWidth*2}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <polyline
        points={`${strokeWidth},${gridSize/2} ${gridSize-strokeWidth},${gridSize/2}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
      <polyline
        points={`${strokeWidth},${gridSize/2 + strokeWidth*2} ${gridSize-strokeWidth},${gridSize/2+ strokeWidth*2}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

export default DragHandle;
