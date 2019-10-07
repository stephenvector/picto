export type Point = {
  x: number;
  y: number;
};

export function degreesToRadians(degrees: number): number {
  return ((degrees % 360) * Math.PI) / 180;
}

export function radiansToDegrees(radians: number): number {
  return (radians * 180) / Math.PI;
}

export function pointsToLineString(points: Point[]) {
  return points.map(({ x, y }) => `${x.toFixed(8)},${y.toFixed(8)}`).join(" ");
}
