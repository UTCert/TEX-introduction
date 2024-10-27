import React from "react";
import { cn } from "@/utils/cn";
import { TypewriterEffect } from "../TypeWriter/typewriter";
import { OpenModalButton } from "../HoverButton/OpenModalButton";

export function SpotlightAirdrop() {
  const words = [
    {
      text: "Blockchain",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Software",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
    {
      text: "Development",
      className:
        "text-4xl md:text-7xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50",
    },
  ];
  return (
    <div className="h-[40rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative overflow-hidden">
      <div className=" p-4 max-w-9xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffect words={words} cursorClassName="bg-white" />
        </h1>
        <p className=" mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Follow TEX to build a strong Blockchain community together, we will
          try to develop with funded projects and bring products to the
          international user community. Let&apos;s discuss Blockchain technology
          development strategies, cooperate to build practical application
          platforms and especially a completely transparent, anti-fraud,
          decentralized system on multiple Blockchain platforms.
        </p>
        {/* <div className="mt-10">
          <OpenModalButton></OpenModalButton>
        </div> */}
      </div>
    </div>
  );
}
