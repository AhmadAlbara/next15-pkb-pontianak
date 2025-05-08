import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main className="md:px-10 md:flex md:justify-between">
        {children}

        <Sidebar />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
