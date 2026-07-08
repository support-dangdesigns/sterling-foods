/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue =
  | "tablet"
  | "mobile"
  | "desktop"
  | "laptop"
  | "smallerTablet"
  | "iphone8"
  | "smallerLaptop"
  | "imac"
  | "desktop2";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);
export function ScreenContextProvider(
  props: React.PropsWithChildren<{ value: ScreenValue[] | undefined }>
) {
  return (
    <ScreenContext.Provider value={props.value}>
      {props.children}
    </ScreenContext.Provider>
  );
}

export const useScreenVariants = createUseScreenVariants(true, {
  tablet: "(max-width:1024px)",
  mobile: "(max-width:414px)",
  desktop: "(max-width:1920px)",
  laptop: "(max-width:1440px)",
  smallerTablet: "(max-width:757px)",
  iphone8: "(max-width:375px)",
  smallerLaptop: "(max-width:1200px)",
  imac: "(max-width:1280px)",
  desktop2: "(max-width:1512px)"
});

export default ScreenContext;
/* prettier-ignore-end */
