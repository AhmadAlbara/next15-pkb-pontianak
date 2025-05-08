"use client";

import AppLogo from "@/components/elements/AppLogo";
import HamburgerButton from "@/components/elements/HamburgerButton";
import NAVBAR_ITEMS from "@/constants/navbar";
import Link from "next/link";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // FILTER NAVBAR ITEMS
  const mainItems = NAVBAR_ITEMS.filter(
    (item) =>
      item.label === "Beranda" ||
      item.label === "Tentang Kami" ||
      item.label.trim() === "Kontak"
  );
  const dropdownItems = NAVBAR_ITEMS.filter(
    (item) => !mainItems.includes(item)
  );

  return (
    <nav className="w-full py-5 relative flex justify-between items-center ">
      <AppLogo />

      <div className="space-x-4 hidden md:flex items-center">
        {mainItems.map((items, i) => (
          <Link
            href={items.pathname.trim()}
            key={i}
            className="text-gray-400 hover:text-primary uppercase text-sm"
          >
            {items.label.trim()}
          </Link>
        ))}

        {/* Dropdown Desktop - Hover */}
        <div className="relative group">
          <button
            className="flex items-center gap-1 text-gray-400 hover:text-primary uppercase text-sm focus:outline-none"
          >
            Lainnya <FaChevronDown size={12} />
          </button>
          <div
            className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            {dropdownItems.map((item, i) => (
              <Link
                key={i}
                href={item.pathname.trim()}
                className="block px-4 py-2 text-sm uppercase hover:bg-gray-100 hover:text-primary"
              >
                {item.label.trim()}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
