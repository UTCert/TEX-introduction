"use client";

import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import {
  IconMenu,
  IconGift,
  IconRocket,
  IconNotebook,
  IconHome,
  IconSearch,
  IconBook,
  IconUser,
  IconZoomExclamation,
  IconZoomExclamationFilled,
  IconWorldSearch,
} from "@tabler/icons-react";

const Icon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-stack"
    viewBox="0 0 16 16"
  >
    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z" />
    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z" />
  </svg>
);

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown min-[767px]:hidden">
      <button className="w-full flex flex-1" onClick={toggleMenu}>
        <NavButton id="#menu" text="" icon={<IconMenu />} />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="w-full flex flex-1 ">
            <NavButton id="#" text="Home" icon={<IconHome stroke={2} />} />{" "}
            <NavButton
              id=""
              text="Problem"
              icon={<IconWorldSearch stroke={2} />}
            />
            <NavButton id="" text="Product" icon={<IconBook stroke={2} />} />
            <NavButton id="" text="About US" icon={<IconUser stroke={2} />} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
