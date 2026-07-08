/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group1Icon(props: Group1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={"M0 0h29v4H0zm0 22h29v4H0zm0-11h22v4H0z"}
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default Group1Icon;
/* prettier-ignore-end */
