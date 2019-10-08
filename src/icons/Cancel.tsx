import React, { useContext } from "react";
import Svg from "./Svg";
import { IconSettingsContext } from "../";

export default function Cancel({ ...otherProps }) {
  const { margin, iconGridSize, color, strokeWidth } = useContext(
    IconSettingsContext
  );

  let size = iconGridSize / 2 - margin - strokeWidth;

  size = Math.sqrt(size * size + size * size);

  return (
    <Svg {...otherProps}>
      <g transform="rotate(45, 0, 0)">
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points={`0,${-1 * size} 0,${size}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
        <polyline
          strokeLinecap="round"
          strokeLinejoin="round"
          points={`${-1 * size},0 ${size},0`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </g>
    </Svg>
  );
}
