"use client";
import React, { useRef, useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import classNames from "classnames";

// SVG
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.svg";
import Heart from "./assets/heart1.svg";
import Shopping from "./assets/shopping-cart 1.svg";
import Lines from "./assets/lines.svg";
const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

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
            <ul
              className={classNames(
                styles.navRight,
                `${displayMenu && ".active"}`
              )}
            >
              <li>
                <a href="" className={styles.login}>
                  Login/Register
                </a>
              </li>
              <li>
                <a href="">
                  <Search alt="search" className={styles.hiddenMenu} />
                </a>
              </li>
              <li>
                <a href="">
                  <Heart alt="heart" className={styles.hiddenMenu} />
                </a>
              </li>
              <Link href="/checkout" className={styles.hiddenMenu}>
                <li>
                  <Shopping alt="shopping" />
                </li>
              </Link>
            </ul>

            <Lines
              alt="menu"
              id={styles.menu}
              onClick={() => {
                setDisplayMenu(true);
              }}
            />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
