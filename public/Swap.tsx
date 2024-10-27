import * as React from "react";
import { SVGProps } from "react";

const SwapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    version="1.1"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    x="0px"
    y="0px"
  >
    <g>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
      <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
    </g>
  </svg>
);

export default SwapIcon;
