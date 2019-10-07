import React, { useContext } from "react";
import Svg from "./Svg";
import { IconSettingsContext } from "../";
import { degreesToRadians, pointsToLineString, Point } from "../utils";

type AngledArrowProps = {
  angle: number;
};

export default function AngledArrow({ angle }: AngledArrowProps) {
  const { margin, iconGridSize, arrowAngle, color, strokeWidth } = useContext(
    IconSettingsContext
  );

  function getArrowPoints() {
    const arrowLength = (iconGridSize - 2 * margin) / 2;

    const offsetX =
      -1 * (Math.cos(degreesToRadians(angle)) * (arrowLength / 2));
    const offsetY =
      -1 * (Math.sin(degreesToRadians(angle)) * (arrowLength / 2));

    const centerPoint: Point = {
      x: offsetX + Math.cos(degreesToRadians(angle)) * arrowLength,
      y: offsetY + -1 * Math.sin(degreesToRadians(angle)) * arrowLength
    };

    const beginningPoint: Point = {
      x:
        offsetX +
        centerPoint.x +
        arrowLength * Math.cos(degreesToRadians(180 + angle - arrowAngle / 2)),
      y:
        offsetY +
        centerPoint.y +
        -1 *
          arrowLength *
          Math.sin(degreesToRadians(180 + angle - arrowAngle / 2))
    };

    const endPoint: Point = {
      x:
        offsetX +
        centerPoint.x +
        arrowLength * Math.cos(degreesToRadians(180 + angle + arrowAngle / 2)),
      y:
        offsetY +
        centerPoint.y +
        -1 *
          arrowLength *
          Math.sin(degreesToRadians(180 + angle + arrowAngle / 2))
    };

    return pointsToLineString([
      beginningPoint,
      centerPoint,
      endPoint,
      centerPoint
    ]);
  }

  return (
    <Svg>
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
