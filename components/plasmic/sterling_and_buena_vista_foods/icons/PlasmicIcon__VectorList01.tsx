/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorList01IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorList01Icon(props: VectorList01IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M1.91 1.065A5.1 5.1 0 0 1 4.551.012a6.7 6.7 0 0 1 1.204.04c.52.081.967.222 1.449.459.526.258.9.526 1.333.957.43.432.699.806.957 1.332.172.35.258.58.352.931.124.47.153.726.153 1.27s-.03.8-.153 1.27c-.094.352-.18.58-.352.93a4.7 4.7 0 0 1-.957 1.333c-.433.43-.807.699-1.333.957a5 5 0 0 1-1.459.464c-.382.06-1.106.06-1.488 0A5 5 0 0 1 2.8 9.49a4.7 4.7 0 0 1-1.333-.957 4.6 4.6 0 0 1-.958-1.332 5 5 0 0 1-.463-1.458 6 6 0 0 1 0-1.486c.05-.312.154-.715.25-.977.086-.235.327-.728.45-.921.286-.45.781-1.002 1.163-1.295z"
        }
      ></path>
    </svg>
  );
}

export default VectorList01Icon;
/* prettier-ignore-end */
