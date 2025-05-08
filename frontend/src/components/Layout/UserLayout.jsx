import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

const UserLayout = () => {
  return (
    <>
      {/* {<Header />} */}
      <Header />

      {/* main content  */}
      <Outlet />
<Hero />
      {/* {<Footer />}*/}
      <Footer />
    </>
  );
};

export default UserLayout;
