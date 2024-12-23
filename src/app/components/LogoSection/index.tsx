import React from "react";
import styles from "./logoSection.module.scss";

// SVG
import Logo1 from "./assets/logoipsum1.svg";
import Logo2 from "./assets/logoipsum2.svg";
import Logo3 from "./assets/logoipsum3.svg";
import Logo4 from "./assets/logoipsum4.svg";
import Logo5 from "./assets/logoipsum5.svg";
import Logo7 from "./assets/logoipsum7.svg";
import Logo6 from "./assets/logoipsum6.svg";

const LogoSection = () => {
  return (
    <div className={styles.logoSectionContainer}>
      <div>
        <Logo1 alt="logo1" />
        <Logo2 alt="logo2" />
        <Logo3 alt="logo3" />
        <Logo4 alt="logo4" />
        <Logo5 alt="logo5" />
        <Logo6 alt="logo6" />
        <Logo7 alt="logo7" />
      </div>
    </div>
  );
};

export default LogoSection;
