import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="justify-evenly md:flex md:gap-8 md:px-10 py-6 max-w-7xl mx-auto">
        <div className="">{children}</div>
        <Sidebar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
