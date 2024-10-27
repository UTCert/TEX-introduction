"use server";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import Navbar from "../Navbar";
import Link from "next/link";
import DropdownMenu from "../Holomenu/DropdownMenu";

const Header: React.FC = () => {
  return (
    <nav className="sticky top-5 h-0 z-10 w-full">
      <div className="w-full flex items-center justify-between pl-4 pr-8 rounded-full backdrop-filter backdrop-blur-lg max-w-7xl mx-auto bg-opacity-0">
        <Link href={"#tex-app"}>
          <Image
            className="max-[767px]:hidden"
            src="/tex.png"
            width={60}
            height={60}
            alt="TEX"
          />
        </Link>
        <div className="flex items-center lg:flex md:flex hidden">
          <Navbar />
        </div>
        <div className="container flex-1">
          <DropdownMenu />
        </div>
        <div className="mr-3 bg-clip-text text-sm font-bold text-white ">
          {" "}
          Contact US{" "}
        </div>
        {/* <Link href={"#"} target="_blank">
          <button className="flex justify-center items-center gap-2 px-4 py-2 text-xs group border rounded-lg border-[#020617] bg-transparent hover:bg-[#020617] hover:border-[#020617] duration-300 transition-all text-white font-bold">
            {"Launch App"}
            <HiMiniRocketLaunch className="group-hover:animate-bounce" />
          </button>
        </Link> */}
      </div>
    </nav>
  );
};

export default Header;
