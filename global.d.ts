declare module "@svgr/core";

declare module "@svgr/core" {
  type SVGROptions = {
    icon: boolean;
  };
  type SVGRState = {
    componentName: string;
  };
  function sync(input: string, options: SVGROptions, state: SVGRState): string;
}
