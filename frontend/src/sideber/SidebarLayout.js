import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="main-content">{children}</div>
    </>
  );
};

export default SidebarLayout;
