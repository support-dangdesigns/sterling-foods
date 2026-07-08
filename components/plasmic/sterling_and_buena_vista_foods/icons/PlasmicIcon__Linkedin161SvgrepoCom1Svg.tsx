/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Linkedin161SvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Linkedin161SvgrepoCom1SvgIcon(
  props: Linkedin161SvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"-4.4 -4.4 28.8 28.8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M20 20h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V20H7V7h4v1.462s1.255-2.202 4.083-2.202S20 7.986 20 11.558zM2.442 4.921A2.45 2.45 0 0 1 0 2.46 2.45 2.45 0 0 1 2.442 0a2.45 2.45 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461M0 20h5V7H0z"
        }
      ></path>
    </svg>
  );
}

export default Linkedin161SvgrepoCom1SvgIcon;
/* prettier-ignore-end */
