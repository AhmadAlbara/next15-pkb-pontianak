"use client";

import NEWS_ITEMS from "@/constants/news";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-80    h-fit">
      <h2 className="text-lg  uppercase tracking-wide text-primary mb-4">
        Berita Terbaru
      </h2>
      <ul className="space-y-4">
        {NEWS_ITEMS.map((item, index) => (
          <li key={index} className=" border-b pb-3 last:border-none">
            <div className="w-full h-40 overflow-hidden rounded-md">
              <Image
                src={item.src || "/placeholder.jpg"}
                alt={item.title}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <Link
                href={`/news/${item.slug}`}
                className="block font-medium text-gray-800 hover:text-primary hover:underline transition-colors"
              >
                {item.title}
              </Link>
              <p className="text-xs text-gray-500">
                {new Date(item.date).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
