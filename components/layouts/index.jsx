import React from "react";

const AppLayout = ({children}) => {
  return (
    <div>
      <>
        <header className="w-full py-4 bg-teal-600">
          <nav>Ini adalah nav</nav>
        </header>
        <main>{children}</main>
        <footer>Ini adalah Footer</footer>
      </>
    </div>
  );
};

export default AppLayout;
