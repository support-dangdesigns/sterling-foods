/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CaretRightSmSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CaretRightSmSvgrepoComSvgIcon(
  props: CaretRightSmSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m11 9 3 3-3 3"}
      ></path>
    </svg>
  );
}

export default CaretRightSmSvgrepoComSvgIcon;
/* prettier-ignore-end */
