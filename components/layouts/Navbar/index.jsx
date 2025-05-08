"use client";

import AppLogo from "@/components/elements/AppLogo";
import HamburgerButton from "@/components/elements/HamburgerButton";
import NAVBAR_ITEMS from "@/constants/navbar";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-5   relative flex justify-between items-center md:max-w-7xl md:mx-auto ">
      <AppLogo />

      <div className="space-x-4 hidden md:flex">
        {NAVBAR_ITEMS.map((items, i) => (
          <Link
            href={items.pathname}
            key={i}
            className="text-gray-400 hover:text-primary uppercase text-sm"
          >
            {items.label}
          </Link>
        ))}
      </div>
      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
