import React from "react";
import style from "./SideDrawer.module.css";

const SideDrawer = ({ drawerIsOpen, children }) => {
  return (
    <div className={drawerIsOpen ? "side-drawer show-drawer" : "side-drawer"}>
      {children}
    </div>
  );
};

export default SideDrawer;
