import React from "react";
import Image from "next/image"; // Import Image dari Next.js
import PROFILE_ITEMS from "@/constants/profile"; // Asumsikan PROFILE_ITEMS diimpor dari folder constants
import BackButton from "@/components/elements/BackButton";

const ProfilePage = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <BackButton />
      <h1 className="text-2xl font-bold text-primary my-6">
        Profil Kepengurusan PKB Pontianak
      </h1>

      {PROFILE_ITEMS.map((profile, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center mb-4">
            {profile.image && (
              <div className="relative w-24 h-24 overflow-hidden mr-6 ">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold text-primary">
                {profile.name}
              </h2>
              {profile.alias && (
                <p className="text-xl text-gray-700 italic">{profile.alias}</p>
              )}
              <p className="text-lg text-gray-600">{profile.position}</p>
            </div>
          </div>

          <p className="text-gray-800 mb-4">{profile.description}</p>

          <div className="grid grid-cols-2 gap-4">
            {profile.education && profile.education.length > 0 && (
              <div>
                <h3 className="font-semibold text-primary">Pendidikan:</h3>
                <ul className="list-disc pl-5">
                  {profile.education.map((edu, i) => (
                    <li key={i} className="text-gray-600">
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.workExperience && profile.workExperience.length > 0 && (
              <div>
                <h3 className="font-semibold text-primary">Pengalaman Kerja:</h3>
                <ul className="list-disc pl-5">
                  {profile.workExperience.map((work, i) => (
                    <li key={i} className="text-gray-600">
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {profile.career && profile.career.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-primary">Karir:</h3>
              <ul className="list-disc pl-5">
                {profile.career.map((career, i) => (
                  <li key={i} className="text-gray-600">
                    {career}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {profile.achievements && profile.achievements.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-primary">Prestasi:</h3>
              <ul className="list-disc pl-5">
                {profile.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
};

export default ProfilePage;
