/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group2Icon(props: Group2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M22.5 0H0v23.5h14c.5 12-1.537 11.79-10 13.5 0 1.5 1.525 4.148 5 4 6.248 0 11.573-5.544 13.308-10.86.138-.422.192-.865.192-1.31zM52 0H29.5v23.5h14c.5 12-1.537 11.79-10 13.5 0 1.5 1.525 4.148 5 4 6.248 0 11.573-5.544 13.308-10.86.138-.422.192-.865.192-1.31z"
        }
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
