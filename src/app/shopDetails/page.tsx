"use client";
import React from "react";
import styles from "./shopDetails.module.scss";
import Image from "next/image";

//COMPONENTS
import GlobalContainer from "../components/GlobalContainer";
import Card from "@/components/Card";

//SVG
import Maximise from "./assets/maximize.svg";
import Chevron from "./assets/chevron.svg";
import Check from "./assets/check.svg";
import Facebook from "./assets/facebook.svg";
import Instagram from "./assets/instagram.svg";
import Twitter from "./assets/twitter.svg";
import Linkedin from "./assets/linkedin.svg";
import StarGrey from "./assets/StarGrey.svg";
import Star from "./assets/Staryellow.svg";
import Heart from "./assets/heart.svg";
//IMG
import leftImg from "./assets/leftImg.jpg";
import greenBowl from "./assets/greenBowl-removebg-preview.png";
import redBowl from "./assets/redBowl-removebg-preview.png";
import Button from "@/components/Button";
import LogicButton from "@/components/LogicButton";
import Link from "next/link";
const ShopDetails = () => {
  return (
    <div className={styles.container}>
      <GlobalContainer>
        <div className={styles.nav}>
          <Link href="/">
            <a>Home</a>{" "}
          </Link>{" "}
          &#8250; <p>Shop Standard With Details</p>
        </div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <div className={styles.iconContainer}>
              <Maximise />
            </div>
            <Image
              src={redBowl}
              width={547}
              height={456}
              alt="red steel bowl"
              className={styles.topImg}
            />
            <div className={styles.bowlsContainer}>
              <div className={styles.bowlContainer}>
                <Image
                  src={redBowl}
                  width={547}
                  height={456}
                  alt="green steel bowl"
                  className={styles.absoluteImg}
                />
              </div>
              <div className={styles.bowlContainer}>
                <Image
                  src={greenBowl}
                  width={547}
                  height={456}
                  alt="red steel bowl"
                  className={styles.absoluteImg}
                />
              </div>
              <div className={styles.bowlContainer}>
                <Image
                  src={greenBowl}
                  width={547}
                  height={456}
                  alt="green steel bowl"
                  className={styles.absoluteImg}
                />
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <h5>Sale 20% off</h5>
            <h2>Steel paw bone printed bowl</h2>
            <div className={styles.likesContainer}>
              <span>
                <Star />
                <Star />
                <Star />
                <StarGrey />
                <StarGrey />
              </span>
              <span>4.7 Rating </span>
              (5 customer reviews)
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className={styles.priceAndQuantity}>
              <div>
                <h3>Price</h3>
                <div className={styles.price}>
                  $45.00
                  <span>$132.17</span>
                </div>
              </div>
              <div>
                <h3>Quantity</h3>
                <LogicButton withTotal={false} />
              </div>
            </div>
            <div className={styles.buttonsContainer}>
              <Button color="black" variant="rectangle" width="S">
                ADD TO CART
              </Button>
              <Button
                color="transparent"
                withBorder
                variant="rectangle"
                width="S"
              >
                <Heart /> Add To Wishlist
              </Button>
            </div>
            <div className={styles.informations}>
              <div>
                <h4>SKU:</h4>
                <span>PRT584E63A</span>
              </div>
              <div>
                <h4>Category:</h4>
                <span>
                  Dog Bowls, Accessories, Dog Training, Health, Dog Food,
                </span>
              </div>
              <div>
                <h4>Tags:</h4>
                <span>Bowls, Bags, Clothe, Toothbrushes,</span>
              </div>
              <div>
                <h4>Share:</h4>
                <div className={styles.socialsLogos}>
                  <a href="https://www.facebook.com">
                    <Facebook />
                  </a>
                  <a href="https://www.linkedin.com">
                    <Linkedin />
                  </a>
                  <a href="https://www.instagram.com">
                    <Instagram />
                  </a>
                  <a href="https://www.twitter.com">
                    <Twitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.choices}>
          <h6>Description</h6>
          <h6>Reviews (12)</h6>
        </div>
        <div className={styles.central}>
          <h3>Paw bone printed bowl</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div className={styles.picturesContainer}>
            <div className={styles.topPicturesContainer}>
              <div className={styles.left}>
                <div className={styles.titleContainer}>
                  <Button color="transparent" withBorder width="XXS">
                    <Check />
                  </Button>
                  The anti ant bowls makes it impossible
                </div>
                <div className={styles.pictureContainer}>
                  <Image
                    src={leftImg}
                    width={5546}
                    height={3697}
                    alt="woman feeding a dog"
                    className={styles.leftImg}
                  />
                </div>
              </div>
              <div className={styles.left}>
                <div className={styles.titleContainer}>
                  <Button color="transparent" withBorder width="XXS">
                    <Check />
                  </Button>
                  High quality & heavy duty for durability
                </div>
                <div className={styles.pictureContainer}>
                  <Image
                    src={leftImg}
                    width={5546}
                    height={3697}
                    alt="woman feeding a dog"
                    className={styles.leftImg}
                  />
                </div>
              </div>
            </div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries also the leap into electronic
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions.
            </p>
            <div className={styles.bottomPictureContainer}>
              <Image
                src={leftImg}
                width={5546}
                height={3697}
                alt="woman feeding a dog"
                className={styles.leftImg}
              />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomTitle}>
            <h2>Related products</h2>
            <div>
              See all products
              <Chevron />
            </div>
          </div>
          <div className={styles.cardsContainer}>
            <Card title="Dog Body Belt" source="belt" />

            <Card title="Dog Clothes" source="cloth" />

            <Card title="Pet Bed For Dog" source="bed" />

            <Card title="Dog Chew Toys" source="toy" />
          </div>
        </div>

        <div className={styles.rightVerticalSideBar}>
          <ul>
            <li>
              <a href="https://www.instagram.com">INSTAGRAM</a>
            </li>
            <li>
              <a href="https://www.facebook.com">FACEBOOK</a>
            </li>
            <li>
              <a href="https://www.twitter.com">TWITTER</a>
            </li>
          </ul>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default ShopDetails;
