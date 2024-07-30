import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showFooter = true }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
