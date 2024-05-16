import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import logo from "./Logo.svg";
import search from "./search.svg";
import heart from "./heart1.svg";
import shopping from "./shopping-cart 1.svg";
import lines from "./lines.svg";
const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.logoContainer}>
            <Image src={logo} width={41.82} height={44} alt="logo" />
            <h2>petperks</h2>
          </div>
          <nav>
            <div className={styles.navLeft}>
              <ul>
                <li>
                  <a href="">
                    Home <span>✦</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Shop <span>✦</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Blog <span>✦</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Portfolio <span>✦</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    Pages <span>✦</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.navRight}>
              <div className={styles.login}>
                <a href="">Login/Register</a>
              </div>
              <div className={styles.imgContainer}>
                <a href="">
                  <Image src={search} alt="search" width={18} height={18} />
                </a>
                <a href="">
                  <Image src={heart} alt="heart" width={20} height={20} />
                </a>
                <a href="">
                  <Image src={shopping} alt="heart" width={20} height={20} />
                </a>

                <a
                  href="
              "
                >
                  <Image src={lines} width={30} height={13} alt="lines" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
