import { createContext } from "react";

export type IconSettings = {
  iconGridSize: number;
  color: string;
  margin: number;
  arrowAngle: number;
  strokeWidth: number;
};

export const defaultSettings: IconSettings = {
  iconGridSize: 64,
  color: "#000",
  margin: 8,
  arrowAngle: 90,
  strokeWidth: 6
};

export const IconSettingsContext = createContext<IconSettings>(defaultSettings);
