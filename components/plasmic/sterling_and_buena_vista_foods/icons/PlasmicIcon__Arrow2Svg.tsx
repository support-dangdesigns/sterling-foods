/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Arrow2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Arrow2SvgIcon(props: Arrow2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      x={"0"}
      y={"0"}
      version={"1.1"}
      viewBox={"0 0 128 261"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M129 260.593c-1.353.782-2.706 1.366-4.06 1.368-41.31.048-82.62.039-123.932.039-.003-86.947-.003-173.895-.003-260.92H129z"
        }
        opacity={"1"}
      ></path>
    </svg>
  );
}

export default Arrow2SvgIcon;
/* prettier-ignore-end */
