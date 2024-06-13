import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

// SVG
import Logo from "../Header/assets/Logo.svg";
import Arrow from "./assets/arrowRight.svg";
import Paiement from "./assets/paiement.svg";
import PawVector from "./assets/paw.svg";

// IMG
import belt from "./assets/belt.jpg";
import bed from "./assets/bed.png";
import toy from "./assets/dogChewToys.jpg";
import cat from "./assets/catFood.png";

//COMPONENTS
import GlobalContainer from "@/app/components/GlobalContainer";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src={cat}
        alt="cat & food"
        width={205}
        height={307}
        className={styles.catFood}
      />
      <GlobalContainer>
        <div className={styles.footerContainer}>
          <div className={styles.footerTop}>
            <div>
              <div>
                <div className={styles.logoContainer}>
                  <Logo alt="logo" />
                  <h2>PetPerks</h2>
                </div>
                <h5>Address: 451 Wall Street, UK, London</h5>
                <h5>E-mail: example@info.com</h5>
                <h5>Phone: (064) 332-1233</h5>
              </div>
              <div className={styles.footerNewsletter}>
                <h4>Subscribe to our newsletter</h4>
                <div className={styles.input}>
                  <p>Your Email Address </p>

                  <a href="">
                    <Arrow alt="arrow right" />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.posts}>
              <h3>Recents Posts</h3>
              <div className={styles.postsContainer}>
                <div className={styles.postContainer}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={belt}
                      width={300}
                      height={300}
                      alt=""
                      className={styles.img60}
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <h4>Dog Harnless body belt</h4>
                    <h6>July 23, 2024</h6>
                  </div>
                </div>
                <div className={styles.postContainer}>
                  <div className={styles.imgContainer}>
                    <Image src={bed} width={60} height={60} alt="" />
                  </div>
                  <div className={styles.textContainer}>
                    <h4>Pet beds for small</h4>
                    <h6>July 23, 2024</h6>
                  </div>
                </div>
                <div className={styles.postContainer}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={toy}
                      width={2500}
                      height={2500}
                      alt=""
                      className={styles.img60}
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <h4>Goofy tails wood dog</h4>
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

          <div className={styles.footerBottom}>
            <div className={styles.copyright}>
              ©2024 DexignZone Theme. All rights reserved.
            </div>
            <div className={styles.paiements}>
              <p> we accept:</p>
              <Paiement alt="paiement" />
            </div>
          </div>
        </div>
      </GlobalContainer>
      <PawVector
        alt="paw"
        className={styles.pawImg}
        width={234.75}
        height={464.04}
      />
    </footer>
  );
};

export default Footer;
