import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideMenu from "./SideMenu";

function Layout() {
  return (
    <>
      {/* Header */}
      <div className="md:h-16">
        <Header />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="col-span-2 hidden lg:block h-screen sticky top-0">
          <SideMenu />
        </div>

        {/* Main Content */}
        <div className="col-span-10 p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;