"use client";

import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/news");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-block text-primary hover:scale-105"
    >
      ← Kembali
    </button>
  );
};

export default BackButton;
