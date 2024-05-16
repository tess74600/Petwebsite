import React from "react";
import styles from "./footer.module.scss";
import logo from "../Header/Logo.svg";
import arrow from "./arrow-right 1.svg";
import paiement from "./paiement.svg";
import footerImg from "./footerImg.svg";
import rectangleImg from "./imgRectangle.svg";
import footerLine from "./footerLine.svg";
import pawVector from "./paw.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src={rectangleImg}
        alt="image rectangle"
        width={205}
        height={307}
        className={styles.imgRectangle}
      />
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerContact}>
            <div className={styles.footerAddress}>
              <div className={styles.logoContainer}>
                <Image src={logo} width={33} height={35} alt="logo" />
                <h2>PetPerks</h2>
              </div>
              <h5>Address: 451 Wall Street, UK, London</h5>
              <h5>E-mail: example@info.com</h5>
              <h5>Phone: (064) 332-1233</h5>
            </div>
            <div className={styles.footerNewsletter}>
              <h5>Subscribe to our newsletter</h5>
              <div className={styles.input}>
                <p>Your Email Address </p>

                <a href="">
                  <Image src={arrow} width={20} height={20} alt="arrow right" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.posts}>
            <h3>Recents Posts</h3>
            <div className={styles.postsContainer}>
              <div className={styles.postContainer}>
                <Image src={footerImg} width={40} height={40} alt="" />
                <div className={styles.textContainer}>
                  <h5>Dog Harnless body belt</h5>
                  <h6>July 23, 2024</h6>
                </div>
              </div>
              <div className={styles.postContainer}>
                <Image src={footerImg} width={40} height={40} alt="" />
                <div className={styles.textContainer}>
                  <h5>Pet beds for small</h5>
                  <h6>July 23, 2024</h6>
                </div>
              </div>
              <div className={styles.postContainer}>
                <Image src={footerImg} width={40} height={40} alt="" />
                <div className={styles.textContainer}>
                  <h5>Goofy tails wood dog</h5>
                  <h6>July 23, 2024</h6>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.stores}>
            <h3>Our Stores</h3>
            <ul>
              <li>
                <a href="">New York</a>
              </li>
              <li>
                <a href="">London SF</a>
              </li>
              <li>
                <a href="">Edinburgh</a>
              </li>
              <li>
                <a href="">Los Angeles</a>
              </li>
              <li>
                <a href="">Chicago</a>
              </li>
              <li>
                <a href="">Las Vegas</a>
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Latest News</a>
              </li>
              <li>
                <a href="">Our Sitemap</a>
              </li>
            </ul>
          </div>
          <div className={styles.menuFooter}>
            <h3>Footer menu</h3>
            <ul>
              <li>
                <a href="">Instagram Profile</a>
              </li>
              <li>
                <a href="">New Collection</a>
              </li>
              <li>
                <a href="">Woman Dress</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Latest News</a>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src={footerLine}
          width={1290}
          height={0}
          alt="line"
          className={styles.footerLine}
        />
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            ©2024 DexignZone Theme. All rights reserved.
          </div>
          <div className={styles.paiements}>
            <p> we accept:</p>
            <Image src={paiement} width={222} height={19} alt="paiement" />
          </div>
        </div>
      </div>
      <Image
        src={pawVector}
        width={234.75}
        height={464.04}
        alt="paw"
        className={styles.pawImg}
      />
    </footer>
  );
};

export default Footer;
