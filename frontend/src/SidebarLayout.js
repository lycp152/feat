import React from "react";
import Sidebar from "./Sidebar";

const SidebarLayout = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SidebarLayout;
