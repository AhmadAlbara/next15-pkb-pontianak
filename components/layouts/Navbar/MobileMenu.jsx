import Link from "next/link";
import NAVBAR_ITEMS from "@/constants/navbar";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const MobileMenu = ({ isOpen, onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  // FILTER MAIN ITEMS
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
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg block md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {/* MAIN LINKS */}
          {mainItems.map((item, i) => (
            <Link
              href={item.pathname.trim()}
              key={i}
              className="text-white uppercase text-sm"
              onClick={onClose}
            >
              {item.label.trim()}
            </Link>
          ))}

          {/* DROPDOWN MENU */}
          <div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center justify-between text-white uppercase text-sm w-full focus:outline-none"
            >
              Lainnya
              <FaChevronDown
                className={`ml-2 transition-transform ${
                  showDropdown ? "rotate-180" : "rotate-0"
                }`}
                size={12}
              />
            </button>

            {showDropdown && (
              <div className="mt-2 ml-4 flex flex-col space-y-2">
                {dropdownItems.map((item, i) => (
                  <Link
                    href={item.pathname.trim()}
                    key={i}
                    className="text-white uppercase text-xs"
                    onClick={onClose}
                  >
                    {item.label.trim()}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="block md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default MobileMenu;
