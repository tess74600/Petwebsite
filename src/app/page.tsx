import React from "react";

import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";
import GlobalContainer from "./components/GlobalContainer";

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <GlobalContainer>
        <FourthSection />
      </GlobalContainer>
      <FifthSection />
    </>
  );
};

export default Home;
