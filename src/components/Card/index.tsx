"use client";
import React, { useState } from "react";
import styles from "./card.module.scss";
import Image from "next/image";

// IMG
import dogChewToys from "@/components/Footer/assets/dogChewToys.jpg";
import cloth from "./assets/cloth.png";
import bone from "./assets/bone.png";
import rope from "./assets/rope.png";
import pillow from "./assets/cushionDog.png";
import ball from "./assets/toyBall.png";
import watchList from "./assets/watchlist.png";
import bed from "@/components/Footer/assets/bed.png";
// import belt from "./assets/belt.jpg 15-18-38-145.jpg";
import belt from "@/components/Footer/assets/belt.jpg";
//SVG
import Exchange from "./assets/exchange.svg";
import Shopping from "./assets/shopping-cart.svg";
import Visible from "./assets/visible1.svg";
import Star from "@/app/components/FirstSection/assets/Star18.svg";
import Heart from "./assets/watchlist.svg";

const Card = ({ title, source }: { title: string; source: string }) => {
  const functionSwitch = (parametre: string) => {
    switch (parametre) {
      case "belt":
        return (
          <div className={styles.topCard} id={styles.topCard1}>
            <Image
              src={belt}
              width={300}
              height={300}
              alt="belt"
              className={styles.cardImg}
              id={styles.cardImg1}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "cloth":
        return (
          <div className={styles.topCard} id={styles.topCard2}>
            <Image
              src={cloth}
              width={225}
              height={225}
              alt="dog's cloth"
              id={styles.cardImg2}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "bed":
        return (
          <div className={styles.topCard} id={styles.topCard3}>
            <Image
              src={bed}
              width={225}
              height={225}
              alt="bed"
              id={styles.cardImg3}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "toy":
        return (
          <div className={styles.topCard} id={styles.topCard4}>
            <Image
              src={dogChewToys}
              width={2500}
              height={2500}
              alt="bone chew toy"
              id={styles.cardImg4}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "bone":
        return (
          <div className={styles.topCard} id={styles.topCard5}>
            <Image
              src={bone}
              width={225}
              height={225}
              alt="dog's bone"
              id={styles.cardImg5}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "rope":
        return (
          <div className={styles.topCard} id={styles.topCard6}>
            <Image
              src={rope}
              width={225}
              height={225}
              alt="rope"
              id={styles.cardImg6}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "pillow":
        return (
          <div className={styles.topCard} id={styles.topCard7}>
            <Image
              src={pillow}
              width={225}
              height={225}
              alt="dog pillow"
              id={styles.cardImg7}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;
      case "ball":
        return (
          <div className={styles.topCard} id={styles.topCard8}>
            <Image
              src={ball}
              width={225}
              height={225}
              alt="ball"
              id={styles.cardImg8}
              onClick={() => setIsClicked(!isClicked)}
            />
          </div>
        );
        break;

      default:
        null;
    }
  };
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={styles.cardContainer}>
      {functionSwitch(source)}
      <Heart className={styles.watchList} />
      {isClicked && (
        <div className={styles.hoverContainer}>
          <div className={styles.iconsContainer}>
            <Shopping
              alt="shoppingBasket"
              className={styles.icon}
              onClick={() => open("./cartPage")}
            />
          </div>
          <div className={styles.iconsContainer}>
            {<Visible alt="visible" className={styles.icon} />}
          </div>
          <div className={styles.iconsContainer}>
            <Exchange alt="exchange" className={styles.icon} />
          </div>
        </div>
      )}
      <div className={styles.bottomCard}>
        <h5>Pet Item</h5>
        <a>
          <h6>{title}</h6>
        </a>
        <div className={styles.bottomContainer}>
          <div className={styles.priceContainer}>
            <h3 className={styles.price}>$80</h3>
          </div>

          <p className={styles.likeContainer}>
            <Star />
            4.5
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
