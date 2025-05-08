"use client";

import NEWS_ITEMS from "@/constants/news";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 space-y-4">
      <h2 className="text-lg font-bold uppercase tracking-wider text-primary">Berita Terbaru</h2>
      <ul className="space-y-3">
        {NEWS_ITEMS.map((item, index) => (
          <li key={index}>
            <Link
              href={`/news/${item.slug}`}
              className="block text-gray-700 hover:text-primary hover:underline transition"
            >
              {item.title}
            </Link>
            <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString('id-ID')}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
