import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

// SVG
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.svg";
import Heart from "./assets/heart1.svg";
import Shopping from "./assets/shopping-cart 1.svg";
import Lines from "./assets/lines.svg";
const Header = () => {
  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.logoContainer}>
            <Logo alt="logo" />
            <h2>petperks</h2>
          </div>
          <nav>
            <ul className={styles.navLeft}>
              <Link href="/">
                <li>
                  Home
                  <span>✦</span>
                </li>
              </Link>
              <Link href="/shopStandard">
                <li>
                  Shop
                  <span>✦</span>
                </li>
              </Link>
              <Link href="/page404">
                <li>
                  Blog
                  <span>✦</span>
                </li>
              </Link>

              <li>
                <a href="">Portfolio</a>
                <span>✦</span>
              </li>
              <li>
                <a href="">Pages</a>
                <span>✦</span>
              </li>
            </ul>
            <ul className={styles.navRight}>
              <li>
                <a href="" className={styles.login}>
                  Login/Register
                </a>
              </li>
              <li>
                <a href="">
                  <Search alt="search" />
                </a>
              </li>
              <li>
                <a href="">
                  <Heart alt="heart" />
                </a>
              </li>
              <Link href="/checkout">
                <li>
                  <Shopping alt="shopping" />
                </li>
              </Link>
              <li>
                <a
                  href="
              "
                >
                  <Lines alt="lines" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
