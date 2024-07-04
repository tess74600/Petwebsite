import React from "react";

import GlobalContainer from "./components/GlobalContainer";
import LogoSection from "./components/LogoSection";
import HeaderSection from "./components/HeaderSection";
import SearchProductsSection from "./components/SearchProductsSection";
import DisplayProductsSection from "./components/DisplayProductsSection";
import PetLoversSection from "./components/PetLoversSection";

const Home = () => {
  return (
    <>
      <HeaderSection />
      <SearchProductsSection />
      <LogoSection />
      <GlobalContainer>
        <DisplayProductsSection />
      </GlobalContainer>
      <PetLoversSection />
    </>
  );
};

export default Home;
