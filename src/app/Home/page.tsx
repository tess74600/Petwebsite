import styles from "./home.module.scss";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className={styles.firstSectionContainer}>
        <div className={styles.leftVerticalContainer}>
          <ul>
            <div className="topList">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </div>
            <li>Let's talk</li>
          </ul>
        </div>
        <div className={styles.centralContainer}>
          <div className={styles.leftCentralContainer}>
            <div className={styles.top}>
              <h1>
                We give preference to your <span></span> pets
              </h1>
              <p>
                No code need. PLus free shippng on <span>$99+</span> orders
              </p>
              <p>
                {" "}
                adopt a pet <span></span>
              </p>
            </div>
            <div className={styles.bottom}>
              <span></span>
              <div className={styles.textContainer}>
                <h6>Our happy pet owners</h6>
                <p>
                  {" "}
                  <span></span> 4.6(7.2K Reviews)
                </p>
                <div className={styles.circlesContainer}></div>
              </div>
            </div>
          </div>
          <div className={styles.rightCentralContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
