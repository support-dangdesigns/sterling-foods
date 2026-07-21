/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CheckSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CheckSvgIcon(props: CheckSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      className={classNames("plasmic-default__svg", className, "bi bi-check")}
      viewBox={"0 0 16 16"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
        }
      ></path>
    </svg>
  );
}

export default CheckSvgIcon;
/* prettier-ignore-end */
