import React from "react";
import styles from "./fourthSection.module.scss";

//COMPONENTS
import Card from "@/components/Card";
import Button from "@/components/Button";

//SVG
import AllProducts from "./assets/AllProducts.svg";

const FourthSection = () => {
  return (
    <div className={styles.fourthSectionContainer}>
      <div className={styles.titleContent}>
        <div>
          <h2>
            Reliable healthy food <br /> for your pet
          </h2>
          <div className={styles.btnsContainer}>
            <Button color="black" withBorder variant="round" width="S">
              dogs food
            </Button>
            <Button color="white" withBorder variant="round" width="S">
              cats food
            </Button>
            <Button color="white" withBorder variant="round" width="S">
              rabbits food
            </Button>
            <Button color="white" withBorder variant="round" width="S">
              parrot food
            </Button>
            <Button color="white" withBorder variant="round" width="S">
              hamster food
            </Button>
          </div>
        </div>
        <AllProducts />
      </div>
      <div className={styles.cardsContainer}>
        <Card title="Dog Body Belt" source="belt" />
        <Card title="Dog Clothes" source="cloth" />
        <Card title="Pet Bed For Dog" source="bed" />
        <Card title="Dog Chew Toys" source="toy" />
        <Card title="The Bone Dog Toy" source="bone" />
        <Card title="Dog Rope Combo" source="rope" />
        <Card title="Squeaky Ball Dog Toy" source="ball" />
        <Card title="Dog Small Pillow" source="pillow" />
      </div>
    </div>
  );
};

export default FourthSection;
