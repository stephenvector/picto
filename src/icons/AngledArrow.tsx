import React, { useContext } from "react";
import Svg from "./Svg";
import { IconSettingsContext } from "../";
import { degreesToRadians, pointsToLineString, Point } from "../utils";

type AngledArrowProps = {
  angle: number;
};

export default function AngledArrow({
  angle,
  ...otherProps
}: AngledArrowProps) {
  const { margin, iconGridSize, arrowAngle, color, strokeWidth } = useContext(
    IconSettingsContext
  );

  function getArrowPoints() {
    let size = iconGridSize / 2 - margin - strokeWidth;

    size = Math.sqrt(size * size + size * size);

    const arrowLength = size * 1.3;

    const offsetX = -1 * Math.cos(degreesToRadians(angle)) * (arrowLength / 2);
    const offsetY = -1 * Math.sin(degreesToRadians(angle)) * (arrowLength / 2);

    const centerPoint: Point = {
      x: Math.cos(degreesToRadians(angle)) * arrowLength + offsetX,
      y: -1 * Math.sin(degreesToRadians(angle)) * arrowLength - offsetY
    };

    const beginningPoint: Point = {
      x:
        centerPoint.x +
        arrowLength * Math.cos(degreesToRadians(180 + angle - arrowAngle / 2)),
      y:
        centerPoint.y +
        -1 *
          arrowLength *
          Math.sin(degreesToRadians(180 + angle - arrowAngle / 2))
    };

    const endPoint: Point = {
      x:
        centerPoint.x +
        arrowLength * Math.cos(degreesToRadians(180 + angle + arrowAngle / 2)),
      y:
        centerPoint.y +
        -1 *
          arrowLength *
          Math.sin(degreesToRadians(180 + angle + arrowAngle / 2))
    };

    return pointsToLineString([beginningPoint, centerPoint, endPoint]);
  }

  return (
    <Svg {...otherProps}>
      <polyline
        strokeLinecap="round"
        strokeLinejoin="round"
        points={getArrowPoints()}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
}
