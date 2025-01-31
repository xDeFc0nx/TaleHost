import { Fragment } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};
