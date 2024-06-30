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

//IMG
import leftImg from "./assets/leftImg.jpg";
import greenBowl from "./assets/greenBowl.jpg";
import redBowl from "./assets/redBowl.jpg";
import Button from "@/components/Button";
const ShopDetails = () => {
  return (
    <div>
      <GlobalContainer>
        <div className={styles.nav}>
          <p> Home</p> &#8250; <p>Shop Standard With Details</p>
        </div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <div className={styles.iconContainer}>
              <Maximise />
            </div>
            <Image
              src={redBowl}
              width={4800}
              height={4000}
              alt="red steel bowl"
              className={styles.topImg}
            />
          </div>
          <div className={styles.textContainer}>
            <h2>Steel paw bone printed bowl</h2>
            <div></div>
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
                <div className={styles.buttonsContainer}></div>
              </div>
            </div>
            <div className="addToCart"></div>
            <div className={styles.informations}>
              <div>
                <h4>SKU:</h4>
                <h5>PRT584E63A</h5>
              </div>
              <div>
                <h4>Category:</h4>
                <pre>
                  Dog Bowls, Accessories, Dog Training, Health, Dog Food,
                </pre>
              </div>
              <div>
                <h4>Tags:</h4>
                <pre>Bowls, Bags, Clothe, Toothbrushes,</pre>
              </div>
              <div>
                <h4>Share:</h4>
                <div className={styles.socialsLogos}>
                  <Facebook />
                  <Linkedin />
                  <Instagram />
                  <Twitter />
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
            {/* <Card title="The Bone Dog Toy" source="bone" />
            <Card title="Dog Rope Combo" source="rope" /> */}
          </div>
        </div>
        <div className={styles.right}>
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
