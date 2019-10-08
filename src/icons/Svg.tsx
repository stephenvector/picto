import React, { useContext } from "react";
import { defaultSettings, IconSettingsContext } from "../";

type SvgProps = {
  children: React.ReactNode;
};

function Svg({ children }: SvgProps) {
  const { iconGridSize } = useContext(IconSettingsContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${(-1 * iconGridSize) / 2} ${(-1 * iconGridSize) /
        2} ${iconGridSize} ${iconGridSize}`}
    >
      {children}
    </svg>
  );
}

export default Svg;
