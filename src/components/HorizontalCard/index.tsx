import React from "react";
import styles from "./horizontalCard.module.scss";
import Image from "next/image";
// IMG
import dogChewToys from "@/components/Footer/assets/dogChewToys.jpg";
import cloth from "@/components/Card/assets/cloth.png";
import bone from "@/components/Card/assets/bone.png";
import rope from "@/components/Card/assets/rope.png";
import pillow from "@/components/Card/assets/cushionDog.png";
import ball from "@/components/Card/assets/toyBall.png";
import bed from "@/components/Footer/assets/bed.png";
import belt from "@/components/Footer/assets/belt.jpg";
import brush from "./assets/brush.jpg";
import Button from "../Button";

//SVG
import Add from "./assets/plus.svg";
import Remove from "./assets/minus.svg";
import Delete from "./assets/x.svg";
const HorizontalCard = ({
  product,
  price,
}: {
  product: string;
  price: string;
}) => {
  const functionSwitch = (parametre: string) => {
    switch (parametre) {
      case "belt":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={belt}
                width={225}
                height={225}
                alt="belt"
                className={styles.productImg}
                id={styles.productImg1}
              />
              <h4>Dog harness, adjustable for large dog body belt</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "cloth":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={cloth}
                width={225}
                height={225}
                alt="dog's cloth"
                className={styles.productImg}
                id={styles.productImg2}
              />
              <h4>Dog winter sweater for golden retrievers</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "bed":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={bed}
                width={225}
                height={225}
                alt="bed"
                className={styles.productImg}
                id={styles.productImg3}
              />
              <h4>Pet bed for dogs</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "bone":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={dogChewToys}
                width={611}
                height={408}
                alt="bone chew toy"
                className={styles.productImg}
                id={styles.productImg4}
              />
              <h4>dog chew toys</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "toys":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={bone}
                width={225}
                height={225}
                alt="dog's bone"
                className={styles.productImg}
                id={styles.productImg5}
              />
              <h4>Goofy tails wood dog free dog chewtoys</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "rope":
        return (
          <div className={styles.productIdentity}>
            <Image
              src={rope}
              width={225}
              height={225}
              alt="rope"
              className={styles.productImg}
              id={styles.productImg6}
            />
            <div className={styles.price}>{price}</div>
          </div>
        );
        break;
      case "pillow":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={pillow}
                width={225}
                height={225}
                alt="dog pillow"
                className={styles.productImg}
                id={styles.productImg7}
              />
              <h4>confortable pillow for dogs</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "ball":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={ball}
                width={225}
                height={225}
                alt="ball"
                className={styles.productImg}
                id={styles.productImg8}
              />
              <h4>Ball for cats and dogs</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      case "brush":
        return (
          <div className={styles.productContainer}>
            <div className={styles.productIdentity}>
              <Image
                src={brush}
                width={2800}
                height={2800}
                alt="brush"
                className={styles.productImg}
                id={styles.productImgBrush}
              />
              <h4>Brush for dogs and cats</h4>
            </div>
            <div className={styles.price}>{price}</div>
            <div className={styles.quantities}>
              <Button width="XXS">
                <Remove />
              </Button>
              <Button width="XXS" color="white">
                {number}
              </Button>
              <Button width="XXS">
                <Add />
              </Button>
            </div>
            <div className={styles.total}>
              ${total}
              <Button width="XXS">
                <Delete />
              </Button>
            </div>
          </div>
        );
        break;
      default:
        null;
    }
  };

  const total = 0;
  const number = 0;
  return (
    <div className={styles.horizontalCardContainer}>
      {functionSwitch(product)}
    </div>
  );
};

export default HorizontalCard;
