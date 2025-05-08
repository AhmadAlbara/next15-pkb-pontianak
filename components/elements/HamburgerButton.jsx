

import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center md:hidden  "
    >
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`bg-primary block h-0.5 w-6 rounded-sm transition-all duration-300 ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
