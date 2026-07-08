/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector2Icon(props: Vector2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 123 261"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"5"}
        d={
          "M2.5 2.5c50.737 35.808 72.144 57.433 74 104m0 0c-9.058 48.772-41.5 48-55.5 29-12.892-36.945 25.5-49 55.5-29zm0 0C155 157 119 262.5 35 238l-14-5m21 25-21-25 25-10"
        }
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
