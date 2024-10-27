import React from "react";
import {
  IconBrandX,
  IconBrandDiscord,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconBrandMedium,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid grid-cols-12 px-10 py-10 bg-grid-white/[0.01]">
      <div className="col-span-3 col-start-3">
        <h1 className="text-1xl md:text-2xl font-bold text-white">TEX</h1>
        <p className="text-white text-left max-w-[520px] text-xs mt-4">
          Our goal is to develop a multi-field application Blockchain system.
        </p>
      </div>
      <div className="col-span-3 col-start-7">
        <h1 className="text-1xl md:text-2xl font-bold text-white">Links</h1>
        <div className="flex flex-col gap-2 mt-4">
          <Link
            href=""
            className="text-white text-xs w-min hover:text-indigo-500 transition-all duration-300 ease"
          >
            App
          </Link>
          <Link
            href=""
            className="text-white text-xs w-min hover:text-indigo-500 transition-all duration-300 ease"
          >
            About
          </Link>
          <Link
            href=""
            className="text-white text-xs w-min hover:text-indigo-500 transition-all duration-300 ease"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="col-span-3 col-start-10">
        <h1 className="text-1xl  md:text-2xl font-bold text-white">Socials</h1>
        <div className="flex flex-col gap-2 mt-4">
          <Link
            href=""
            target="_blank"
            className="text-white text-lg hover:text-indigo-500 transition-all duration-300 ease"
          >
            <IconBrandX stroke={2} />
          </Link>
          <Link
            href=""
            target="_blank"
            className="text-white text-lg hover:text-indigo-500 transition-all duration-300 ease"
          >
            <IconBrandTelegram stroke={2} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
