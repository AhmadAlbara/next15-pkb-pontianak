

import Link from "next/link";
import NAVBAR_ITEMS from "@/constants/navbar";
import React from "react";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg block md:hidden z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="flex flex-col space-y-6 p-6">
          {NAVBAR_ITEMS.map((items, i) => (
            <Link
              href={items.pathname}
              key={i}
              className="text-white uppercase text-sm"
              onClick={onClose}
            >
              {items.label}
            </Link>
          ))}
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
