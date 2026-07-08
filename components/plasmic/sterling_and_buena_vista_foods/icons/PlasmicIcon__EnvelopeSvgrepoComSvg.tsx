/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvelopeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvelopeSvgrepoComSvgIcon(
  props: EnvelopeSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"currentColor"} d={"M0 5.359V14h16V5.358l-8 5z"}></path>

      <path fill={"currentColor"} d={"M16 3V2H0v1l8 5z"}></path>
    </svg>
  );
}

export default EnvelopeSvgrepoComSvgIcon;
/* prettier-ignore-end */
