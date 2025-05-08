"use client";

import KONTAK_ITEMS from "@/constants/kontak";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const ICONS = {
  Phone: <FaPhone />,
  Email: <FaEnvelope />,
  Facebook: <FaFacebook />,
  Twitter: <FaTwitter />,
  Instagram: <FaInstagram />,
  Address: <FaMapMarkerAlt />,
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Kontak Kami</h2>
          <ul className="space-y-3">
            {KONTAK_ITEMS.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span>{ICONS[item.type]}</span>
                {item.type === "Phone" || item.type === "Email" ? (
                  <a
                    href={`${item.type === "Phone" ? `tel:${item.value}` : `mailto:${item.value}`}`}
                    className="hover:underline"
                  >
                    {item.value}
                  </a>
                ) : item.type === "Address" ? (
                  <span>{item.value}</span>
                ) : (
                  <Link href={item.value} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.alt}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4 uppercase tracking-wider">Tentang Kami</h2>
          <p className="text-white leading-relaxed">
            Kami adalah organisasi yang berkomitmen untuk membangun masyarakat yang lebih baik melalui pendidikan,
            infrastruktur, dan pemberdayaan ekonomi.
          </p>
        </div>
      </div>

      <div className="border-t border-accent mt-8 pt-4 text-center text-sm text-white">
        &copy; {new Date().getFullYear()} PKB Kota Pontianak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
