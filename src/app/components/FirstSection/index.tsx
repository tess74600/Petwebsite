import React from "react";
import styles from "./firstSection.module.scss";
import Image from "next/image";

// SVG
import Paw from "./assets/paws1.svg";
import Star from "./assets/Star18.svg";

//IMG
import woman from "./assets/womanHoldingPuppies.png";
import yellowDog from "./assets/yellowDog.png";
import blackLabrador from "./assets/blackDog.png";
import curvedLine from "./assets/curvedLine.png";
import beagle from "./assets/beagle.png";
import face from "./assets/faceMan.jpg";

//COMPONENTS
import Button from "@/components/Button";

const FirstSection = () => {
  return (
    <div className={styles.firstSectionContainer}>
      <div className={styles.verticalSideBar}>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Let's talk</li>
        </ul>
      </div>
      <div className={styles.centralContainer}>
        <div className={styles.top}>
          <h1>
            We give preference to your
            <span>
              <Image src={beagle} width={137} height={137} alt="beagle" />
            </span>
            pets
          </h1>
          <p>
            No code need. Plus free shippng on <span>$99+</span> orders!
          </p>
          <Button color="black" withBorder variant="rectangle" width="L">
            adopt a pet <Paw width={32} />
          </Button>
        </div>
        <div className={styles.bottom}>
          <Image
            src={yellowDog}
            width={280}
            height={234}
            alt="White and yellow dog"
            id={styles.bottomImg}
          />
          <div className={styles.textContainer}>
            <h6>Our happy pet owners</h6>
            <p>
              <Star alt="star" className={styles.star} />
              <b> 4.6</b>(7.2K Reviews)
            </p>
            <div className={styles.circlesContainer}>
              <div className={styles.circle} id={styles.circle1}>
                <Image
                  src={face}
                  width={3760}
                  height={3760}
                  alt="face"
                  className={styles.circleFace}
                />
              </div>

              <div className={styles.circle} id={styles.circle2}>
                <Image
                  src={face}
                  width={3760}
                  height={3760}
                  alt="face"
                  className={styles.circleFace}
                />
              </div>
              <div className={styles.circle} id={styles.circle3}>
                <Image
                  src={face}
                  width={3760}
                  height={3760}
                  alt="face"
                  className={styles.circleFace}
                />
              </div>
              <div className={styles.circle} id={styles.circle4}>
                <Image
                  src={face}
                  width={3760}
                  height={3760}
                  alt="face"
                  className={styles.circleFace}
                />
              </div>
              <div className={styles.circle} id={styles.circle5}>
                <p>+6K</p>
              </div>
            </div>
          </div>

          <div className={styles.bannerImgContainer}>
            <Image
              src={woman}
              width={633}
              height={956}
              alt="Woman holding puppies"
              id={styles.bannerImg}
            />
            <Image
              src={curvedLine}
              width={809}
              height={709}
              alt="curved Line"
              id={styles.curvedLine}
            />
            <div className={styles.starContainer}>
              <Image
                src={blackLabrador}
                width={500}
                height={500}
                alt="labrador"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
