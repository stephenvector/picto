import React from "react";
import { useIconConfig } from "./IconContext";

function Search() {
  const { size, gridSize, strokeWidth, capStyle, color, lineJoin } = useIconConfig();
  const offset = (gridSize - (2 * strokeWidth)) / 4;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${gridSize} ${gridSize}`}
      width={size}
      height={size}
    >
      <polyline
        points={`${strokeWidth},${strokeWidth + offset} ${gridSize/2},${gridSize/2 + offset} ${gridSize-strokeWidth},${strokeWidth + offset}`}
        stroke={color}
        fill="none"
        strokeLinecap={capStyle}
        strokeWidth={strokeWidth}
        strokeLinejoin={lineJoin}
      />
    </svg>
  );
}

export default Search;
