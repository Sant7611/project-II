import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Home";

const UserLayout = () => {
  return (
    <>
      {/* {<Header />} */}
      <Header />

      {/* main content  */}
      <Outlet />
<Home />
      {/* {<Footer />}*/}
      <Footer />
    </>
  );
};

export default UserLayout;
