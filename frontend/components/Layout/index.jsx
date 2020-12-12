import { Fragment } from "react";
import { Footer, Navbar } from "components";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
