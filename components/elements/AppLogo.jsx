import Image from "next/image";
import Link from "next/link";
import React from "react";

const AppLogo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image src={"/images/logo.jpg"} alt="logo" width={40} height={40} />
      <div className="ml-3 font-semibold">
        <h1 className="text-primary">PKB</h1>
        <p className="font-normal">Pontianak</p>
      </div>
    </Link>
  );
};

export default AppLogo;
