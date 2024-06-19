import React from "react";
import styles from "./secondSection.module.scss";
import Image from "next/image";

// IMG
import cat from "./assets/furryCat.png";
import parrot from "./assets/parrot.png";
import smilingDog from "./assets/smilingDog.png";
import rabbit from "./assets/rabbit.png";
import hamster from "./assets/hamster.png";
import bouvier from "./assets/groomingDog.jpg";
import yorkshire from "./assets/yorkshire.png";

//SVG
import PawVector from "@/components/Footer/assets/paw.svg";
import ButtonArrow from "./assets/buttonArrow.svg";
import LeftArrow from "./assets/leftArrow.svg";
import RightArrow from "./assets/rightArrow.svg";
import Paw from "@/app/components/FirstSection/assets/paws1.svg";
// import Paw from "./../FirstSection/assets/paws1.svg";

// COMPONENTS
import Button from "@/components/Button";
import GlobalContainer from "../GlobalContainer";

const SecondSection = () => {
  return (
    <div className={styles.secondSectionContainer}>
      <div className={styles.whiteContainer}>
        <GlobalContainer>
          <div className={styles.productCategory}>
            <div className={styles.title}>
              <h2>Find Product category</h2>
              <div>
                <LeftArrow alt="left arrow" />
                <RightArrow alt="right arrow" className={styles.rightArrow} />
              </div>
            </div>
            <div className={styles.cardsContainer}>
              <div className={styles.card} id={styles.img1}>
                <h3 className={styles.cardTitle}>Dogs</h3>
                <Image
                  src={smilingDog}
                  width={2000}
                  height={1333}
                  alt="dog"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.card} id={styles.img2}>
                <h3 className={styles.cardTitle}>Cats</h3>
                <Image
                  src={cat}
                  width={2000}
                  height={1121}
                  alt="cat"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.card} id={styles.img3}>
                <h3 className={styles.cardTitle}>Rabbit</h3>
                <Image
                  src={rabbit}
                  width={2000}
                  height={1333}
                  alt="rabbit"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.card} id={styles.img4}>
                <h3 className={styles.cardTitle}>Parrot</h3>
                <Image
                  src={parrot}
                  width={2000}
                  height={1328}
                  alt="parrot"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.card} id={styles.img5}>
                <h3 className={styles.cardTitle}>Hamster</h3>
                <Image
                  src={hamster}
                  width={2000}
                  height={1274}
                  alt="hamster"
                  className={styles.cardImage}
                />
              </div>
            </div>
          </div>
        </GlobalContainer>
      </div>
      <GlobalContainer>
        <div className={styles.petCareServices}>
          <div className={styles.petCareServicesContainer}>
            <div className={styles.leftContainer}>
              <h2>
                Our pet <br />
                care services
              </h2>
              <div className={styles.leftContainerContent}>
                <h5> Pet grooming</h5>
                <RightArrow alt="right arrow" className={styles.arrow} />
              </div>
              <div className={styles.leftContainerContent}>
                <h5> Dog boarding kennels</h5>
                <RightArrow alt="right arrow" className={styles.arrow} />
              </div>
              <div className={styles.leftContainerContent}>
                <h5> dog training</h5>
                <RightArrow alt="right arrow" className={styles.arrow} />
              </div>
              <div className={styles.leftContainerContent}>
                <h5> dog emergency services</h5>
                <RightArrow alt="right arrow" className={styles.arrow} />
              </div>
              <div className={styles.leftContainerContent}>
                <h5> walking and sitting</h5>
                <RightArrow alt="right arrow" className={styles.arrow} />
              </div>
            </div>
            <div className={styles.centralContainer}>
              <h3>pet grooming</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standart dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>

              <Button color="black" withBorder variant="rectangle">
                add services <Paw width={32} />
              </Button>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.rightContainerTop}>
                <div>
                  <Image
                    src={bouvier}
                    width={410}
                    height={272}
                    alt="bouvier"
                    id={styles.topImg}
                  />
                </div>
              </div>
              <div className={styles.rightContainerBottom}>
                <span>
                  <ButtonArrow alt="button arrow" />
                </span>
                <h5>Play video</h5>
                <Image
                  src={yorkshire}
                  width={199}
                  height={184}
                  alt="yorkshire"
                />
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
      <PawVector
        alt="paw"
        className={styles.pawImg}
        width={234.75}
        height={464.04}
      />
    </div>
  );
};

export default SecondSection;
