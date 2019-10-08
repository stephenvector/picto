import React, { useContext } from "react";
import Svg from "./Svg";
import { IconSettingsContext } from "../";

export default function Minus({ ...otherProps }) {
  const { margin, iconGridSize, color, strokeWidth } = useContext(
    IconSettingsContext
  );

  let size = iconGridSize / 2 - margin - strokeWidth;

  size = Math.sqrt(size * size + size * size);

  return (
    <Svg {...otherProps}>
      <line
        strokeLinecap="round"
        x1={0}
        y1={-1 * size}
        x2={0}
        y2={size}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        strokeLinecap="round"
        y1={0}
        x1={-1 * size}
        y2={0}
        x2={size}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
