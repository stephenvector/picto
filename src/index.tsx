import { createContext } from "react";

export type IconSettings = {
  iconGridSize: number;
  lineThickness: number;
  color: string;
  margin: number;
  arrowAngle: number;
  strokeWidth: number;
};

export const defaultSettings: IconSettings = {
  iconGridSize: 32,
  lineThickness: 2,
  color: "#000",
  margin: 2,
  arrowAngle: 90,
  strokeWidth: 2
};

export const IconSettingsContext = createContext<IconSettings>(defaultSettings);
