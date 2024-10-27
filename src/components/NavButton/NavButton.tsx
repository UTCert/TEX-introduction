import React from "react";

interface NavButtonProps {
  id: string;
  text: string;
  icon: any;
}

const NavButton: React.FC<NavButtonProps> = ({ id, text, icon }) => {
  return (
    <a
      href={id}
      target="_self"
      className="relative ml-6 px-5 py-1 overflow-hidden font-medium text-sm text-white bg-transparent rounded-md shadow-inner group "
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200  group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 opacity-0 group-hover:opacity-100"></span>
      <span className="relative flex gap-2 hover:font-semibold items-center transition-colors duration-300 delay-200 group-hover:text-white ease">
        {icon} {text}
      </span>
    </a>
  );
};

export default NavButton;
