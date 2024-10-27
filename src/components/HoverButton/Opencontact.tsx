"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverButton";
import { ContactUs } from "../Contactus/Form";
import { IconMail } from "@tabler/icons-react";

export function Opencontact() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-white flex items-center space-x-2"
        // onClick={() => {
        //   setIsOpen(true);
        // }}
      >
        <IconMail stroke={1} />
        {/* <span className="text-extrabold">Send Message</span> */}
        <a href="mailto:utcert.contact@gmail.com">Send Message</a>
      </HoverBorderGradient>
      {isOpen && <ContactUs isFormOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
}
