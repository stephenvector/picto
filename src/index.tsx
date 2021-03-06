export type IconConfig = {
  capStyle: "round" | "square";
  gridSize: number;
  color: string;
  size: number | string;
  strokeWidth: number;
  lineJoin: "round" | "bevel" | "miter" | "inherit";
};

export { default as AlignCenter } from "./AlignCenter";
export { default as AlignJustify } from "./AlignJustify";
export { default as AlignLeft } from "./AlignLeft";
export { default as AlignRight } from "./AlignRight";
export { default as ArrowDown } from "./ArrowDown";
export { default as ArrowLeft } from "./ArrowLeft";
export { default as ArrowRight } from "./ArrowRight";
export { default as ArrowUp } from "./ArrowUp";
export { default as Cancel } from "./Cancel";
export { default as DragHandle } from "./DragHandle";
export { default as Plus } from "./Plus";
export { default as Mail } from "./Mail";
export { default as Minus } from "./Minus";
export { default as Menu } from "./Menu";
export { default as Move } from "./Move";
export { default as RadioActive } from "./RadioActive";
export { default as RadioInactive } from "./RadioInactive";
export { defaultIconContext, useIconConfig, IconProvider } from "./IconContext";
