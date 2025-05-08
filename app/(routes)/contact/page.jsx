import React from 'react';
import KONTAK_ITEMS from '@/constants/kontak';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const iconMap = {
  Phone: <FaPhone className="w-5 h-5 text-primary" />,
  Email: <FaEnvelope className="w-5 h-5 text-primary" />,
  Address: <FaMapMarkerAlt className="w-5 h-5 text-primary" />,
  Facebook: <FaFacebook className="w-5 h-5 text-primary" />,
  Twitter: <FaTwitter className="w-5 h-5 text-primary" />,
  Instagram: <FaInstagram className="w-5 h-5 text-primary" />,
};

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto   ">
      <h1 className="text-3xl font-bold text-primary mb-6">Kontak Kami</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <ul className="space-y-4">
          {KONTAK_ITEMS.map((kontak, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-4">
                {iconMap[kontak.type]}
              </div>
              <div>
                <p className="text-lg font-medium text-primary">{kontak.alt}</p>
                {kontak.type === 'Phone' ? (
                  <a href={`tel:${kontak.value}`} className="text-gray-700 hover:underline">
                    {kontak.value}
                  </a>
                ) : kontak.type === 'Email' ? (
                  <a href={`mailto:${kontak.value}`} className="text-gray-700 hover:underline">
                    {kontak.value}
                  </a>
                ) : kontak.type === 'Facebook' || kontak.type === 'Twitter' || kontak.type === 'Instagram' ? (
                  <a href={kontak.value} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline">
                    {kontak.value}
                  </a>
                ) : (
                  <p className="text-gray-700">{kontak.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
