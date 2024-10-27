import React from "react";
import { cn } from "@/utils/cn";
import { TypewriterEffect } from "../TypeWriter/typewriter";

export function SpotlightPreview() {
  const words = [
    {
      text: "Our",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Solutions",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
  ];
  return (
    <div className="h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffect words={words} cursorClassName="bg-white" />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Current blockchain networks are not yet developed into practical
          applications, we are here to make that happen.
        </p>
      </div>
    </div>
  );
}
