import React from "react";
import { NavbarTop } from "../Nav/NavbarTop";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/HomePage/Footer";
import { LowerSectionCarousel } from "../../pages/HomePage/LowerSection";
import HelpIcon from "../HelpIcon";

const RootComponent = () => {
  const route = window.location.pathname;
  return (
    <div>
      <NavbarTop />
      <Outlet />
      {route === "/login" && <LowerSectionCarousel /> }
      <HelpIcon />
      <Footer />
    </div>
  );
};

export default RootComponent;
