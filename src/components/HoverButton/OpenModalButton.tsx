"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverButton";
import { AirdropForm } from "../AirdropForm/Form";
import { IconGift } from "@tabler/icons-react";

export function OpenModalButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <IconGift stroke={2} />
        <span className="text-extrabold">Become Early Mover</span>
      </HoverBorderGradient>
      {isOpen && <AirdropForm isFormOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
