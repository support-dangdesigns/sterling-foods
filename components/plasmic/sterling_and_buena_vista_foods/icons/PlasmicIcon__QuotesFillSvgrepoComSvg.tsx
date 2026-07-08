/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuotesFillSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuotesFillSvgrepoComSvgIcon(
  props: QuotesFillSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-46.08 -46.08 348.16 348.16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M116 72v88a48.054 48.054 0 0 1-48 48 8 8 0 0 1 0-16 32.036 32.036 0 0 0 32-32v-8H40a16.02 16.02 0 0 1-16-16V72a16.02 16.02 0 0 1 16-16h60a16.02 16.02 0 0 1 16 16m100-16h-60a16.02 16.02 0 0 0-16 16v64a16.02 16.02 0 0 0 16 16h60v8a32.036 32.036 0 0 1-32 32 8 8 0 0 0 0 16 48.054 48.054 0 0 0 48-48V72a16.02 16.02 0 0 0-16-16"
        }
      ></path>
    </svg>
  );
}

export default QuotesFillSvgrepoComSvgIcon;
/* prettier-ignore-end */
