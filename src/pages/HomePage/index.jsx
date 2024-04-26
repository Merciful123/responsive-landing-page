import React from "react";
import HeroSection from "./HeroSection";
import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import GetInspired from "./GetInspired";
import { LowerSectionCarousel } from "./LowerSection";
import Footer from "./Footer";
import HelpIcon from "../../components/HelpIcon";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <GetInspired />
      <LowerSectionCarousel />
      {/* <Footer /> */}
      <HelpIcon />
    </>
  );
};

export default HomePage;
