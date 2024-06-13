import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";

//SVG
import Chevron from "./assets/chevronRight.svg";

//IMG
import checkoutBanner from "./assets/checkoutBanner.jpg";
import cartPageBanner from "./assets/cartPageBanner.jpg";
import shopStandardBanner from "./assets/shopStandardBanner.jpg";
const Banner = ({ page, source }: { page: string; source: string }) => {
  const imgSwitch = (parametre: string) => {
    switch (parametre) {
      case "checkout":
        return (
          <div className={styles.imgContainer}>
            <Image
              src={checkoutBanner}
              width={1919}
              height={853}
              alt="checkoutBanner"
              className={styles.bannerContainer}
            />
          </div>
        );
        break;
      case "cartPage":
        return (
          <div className={styles.imgContainer}>
            <Image
              src={cartPageBanner}
              width={1919}
              height={1279}
              alt="cartPageBanner"
              className={styles.bannerContainer}
              id={styles.cartPageBannerImg}
            />
          </div>
        );
        break;
      case "shopStandard":
        return (
          <div className={styles.imgContainer}>
            <Image
              src={shopStandardBanner}
              width={1918}
              height={720}
              alt="shopStandardBanner"
              className={styles.bannerContainer}
              id={styles.shopStandardBannerImg}
            />
          </div>
        );
        break;
      default:
        null;
    }
  };
  return (
    <>
      <div className={styles.bannerContainer}>
        {imgSwitch(source)}
        <div className={styles.textContent}>
          <h2>{page}</h2>
          <div className={styles.textContainer}>
            <h6> Home</h6>
            <Chevron />
            <h6>{page}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
