import React from "react";
import { Meteors } from "./meteors";

export function MeteorsDemo() {
  return (
    <div className="flex-1 max-w-full">
      <div className=" w-full relative h-full">
        <div className="absolute inset-0 h-full bg-black w-ful rounded-full " />
        <div className="relative shadow-xl bg-black px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
