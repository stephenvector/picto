import React, { createContext, useContext } from "react";
import { IconConfig } from "./";

const IconContext = createContext<IconConfig | undefined>(undefined);

export const defaultIconContext: IconConfig = {
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
    return defaultIconContext;
  }

  return iconContextValue;
}

export function IconProvider({
  theme,
  children
}: {
  theme: IconConfig;
  children: React.ReactNode;
}) {
  return <IconContext.Provider value={theme}>{children}</IconContext.Provider>;
}

IconProvider.defaultProps = {
  theme: defaultIconContext
};
