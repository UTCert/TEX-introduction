"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "./GlowingStars";
import { Opencontact } from "@/components/HoverButton/Opencontact";

export function ContanctComponent() {
  return (
    <div className="-z-1 text-center flex py-20 w-full items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <div className="flex flex-col items-center justify-center ">
          <GlowingStarsTitle>Contact us</GlowingStarsTitle>
        </div>

        <div className=" flex flex-col items-center justify-center mt-4">
          <GlowingStarsDescription className="mb-4">
            Do you want to reach us?
          </GlowingStarsDescription>
          <div className="rounded-full flex items-center justify-center">
            <Opencontact />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
