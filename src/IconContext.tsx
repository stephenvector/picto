import React, { createContext, useContext } from "react";
import { IconConfig } from "./types";

const IconContext = createContext<IconConfig | undefined>(undefined);

export const DefaultIconContext: IconConfig = {
  color: "#000",
  capStyle: "round",
  gridSize: 128,
  size: "1em",
  strokeWidth: 9,
  lineJoin: "round"
};

export function useIconConfig() {
  const iconContextValue = useContext(IconContext);

  if (iconContextValue === undefined) {
    return DefaultIconContext;
  }

  return iconContextValue;
}

export const IconProvider = IconContext.Provider;
