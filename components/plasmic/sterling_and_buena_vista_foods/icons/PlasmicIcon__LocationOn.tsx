/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationOnIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationOnIcon(props: LocationOnIconProps) {
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
        fill={"currentColor"}
        d={
          "M12 12q.825 0 1.412-.588Q14 10.825 14 10t-.588-1.412A1.93 1.93 0 0 0 12 8q-.825 0-1.412.588A1.93 1.93 0 0 0 10 10q0 .825.588 1.412Q11.175 12 12 12m0 10q-4.025-3.425-6.013-6.363Q4 12.701 4 10.2q0-3.75 2.412-5.975T12 2c3.175 0 3.98.742 5.587 2.225Q20.001 6.45 20 10.2q0 2.5-1.988 5.438Q16.025 18.574 12 22"
        }
      ></path>
    </svg>
  );
}

export default LocationOnIcon;
/* prettier-ignore-end */
