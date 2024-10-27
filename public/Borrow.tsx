import * as React from "react";
import { SVGProps } from "react";

const BorrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    version="1.1"
    viewBox="0 0 24 24"
    stroke="white"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-2.896 -2.868m-6.117 -8.104a5 5 0 0 1 9.013 -3.022a5 5 0 1 1 7.5 6.572" />
      <path d="M3 13h2l2 3l2 -6l1 3h3" />
    </g>
  </svg>
);

export default BorrowIcon;
