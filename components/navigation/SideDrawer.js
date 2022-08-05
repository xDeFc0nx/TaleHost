import React from "react";
import style from "./SideDrawer.module.css";

const SideDrawer = ({ drawerIsOpen, children }) => {
  return (
    <div
      className={
        drawerIsOpen
          ? `${style["side-drawer"]} ${style["show-drawer"]}`
          : style["side-drawer"]
      }
    >
      {children}
    </div>
  );
};

export default SideDrawer;
