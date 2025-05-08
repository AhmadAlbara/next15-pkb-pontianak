// app/about/page.jsx
import React from "react";
import { VISI_ITEMS, MISI_ITEMS, STORY_ITEMS, PROFILE_ITEMS } from "@/constants/about";

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* PROFILE */}
      {PROFILE_ITEMS.map((item, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.text}</p>
        </section>
      ))}

      {/* VISI */}
      {VISI_ITEMS.map((item, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 leading-relaxed">{item.text}</p>
        </section>
      ))}

      {/* MISI */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Misi</h2>
        <ul className="list-decimal list-inside space-y-2 text-gray-700">
          {MISI_ITEMS.map((item, index) => (
            <li key={index}>{item.text.replace(/^\d+\.\s/, "")}</li>
          ))}
        </ul>
      </section>

      {/* SEJARAH */}
      {STORY_ITEMS.map((item, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.text}</p>
        </section>
      ))}
    </div>
  );
};

export default AboutPage;
