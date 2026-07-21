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
  | "smallTablet"
  | "smallMobile"
  | "smallLaptop2"
  | "smallLaptop"
  | "smallDesktop"
  | "large"
  | "largerMobile"
  | "dualScreen"
  | "mediumDesktop";
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
  smallTablet: "(max-width:757px)",
  smallMobile: "(max-width:375px)",
  smallLaptop2: "(max-width:1200px)",
  smallLaptop: "(max-width:1280px)",
  smallDesktop: "(max-width:1512px)",
  large: "(max-width:2000px)",
  largerMobile: "(max-width:430px)",
  dualScreen: "(max-width:530px)",
  mediumDesktop: "(max-width:1700px)"
});

export default ScreenContext;
/* prettier-ignore-end */
