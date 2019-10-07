import React, { useContext } from "react";
import { IconSettingsContext } from "../";

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
      width={320}
      height={320}
    >
      {children}
    </svg>
  );
}

export default Svg;
