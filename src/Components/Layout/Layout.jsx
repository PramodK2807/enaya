import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
