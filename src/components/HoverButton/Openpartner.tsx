"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverButton";
import { Becomeourpartner } from "../Becomeourpartner/Form";

export function Openpartner() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-5"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <span className="text-extrabold">Contact us</span>
      </HoverBorderGradient>
      {isOpen && <Becomeourpartner isFormOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
