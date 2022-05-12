import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import style from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={style["slide-in-left"]}
      mountOnEnter
      unmountOnExit
    >
      <aside className={style["side-drawer"]} onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
