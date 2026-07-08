/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InstagramSvgrepoCom3SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InstagramSvgrepoCom3SvgIcon(
  props: InstagramSvgrepoCom3SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      stroke={"currentColor"}
      strokeWidth={"1.04"}
      version={"1.1"}
      viewBox={"-8.4 -8.4 56.8 56.8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.373 13.227a1.28 1.28 0 0 1-1.278-1.277V9.861a1.28 1.28 0 0 1 1.278-1.281h2.088c.706 0 1.28.574 1.28 1.281v2.088a1.28 1.28 0 0 1-1.28 1.277zm-.094-1.184h2.277V9.766h-2.277zm-7.225 4.697c-2.042 0-3.702 1.661-3.702 3.703s1.66 3.703 3.702 3.703c2.043 0 3.704-1.661 3.704-3.703s-1.661-3.703-3.704-3.703zm0 6.024a2.323 2.323 0 0 1-2.319-2.32 2.32 2.32 0 0 1 2.319-2.318c1.279 0 2.32 1.04 2.32 2.318a2.323 2.323 0 0 1-2.32 2.32z"
        }
      ></path>

      <path
        d={
          "M34.275 15.381v-5.9c0-2.14-1.74-3.881-3.879-3.881H9.582a3.884 3.884 0 0 0-3.879 3.881v21.037a3.885 3.885 0 0 0 3.879 3.883h20.814a3.885 3.885 0 0 0 3.879-3.883l.004-14.807a.7.7 0 0 0-.004-.33zm-3.879-8.397a2.5 2.5 0 0 1 2.495 2.496v5.388l-7.846-.026a7.54 7.54 0 0 0-5.06-1.947 7.5 7.5 0 0 0-3.261.738l-.284.14c-.735.336-1.257.846-1.309.892a3 3 0 0 1-.271.203H7.086V9.48c0-1.049.663-1.992 1.648-2.35l.25-.093c.003-.001.327-.054 1.167-.054zm-10.41 19.629c-3.399 0-6.166-2.768-6.166-6.17a6.174 6.174 0 0 1 6.166-6.166c3.403 0 6.172 2.767 6.172 6.166a6.177 6.177 0 0 1-6.172 6.17zm-12.9-10.361h6.625l-.098.153a7.5 7.5 0 0 0-1.177 4.038c0 4.165 3.387 7.553 7.55 7.553 4.166 0 7.556-3.388 7.556-7.553a7.5 7.5 0 0 0-1.178-4.039l-.099-.152h6.626v14.266a2.5 2.5 0 0 1-2.495 2.5H9.582a2.5 2.5 0 0 1-2.496-2.5z"
        }
      ></path>
    </svg>
  );
}

export default InstagramSvgrepoCom3SvgIcon;
/* prettier-ignore-end */
