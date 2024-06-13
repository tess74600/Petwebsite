import React from "react";
import styles from "./fifthSection.module.scss";
import Image from "next/image";

//COMPONENTS
import Button from "@/components/Button";

//IMG
import first from "./assets/first.jpg";
import second from "./assets/second.png";
import third from "./assets/third.jpg";
import fourth from "./assets/fourth.jpg";
import fifth from "./assets/fifth.jpg";
import sixth from "./assets/sixth.jpg";
import seventh from "./assets/seventh.jpg";
import ninth from "./assets/ninth.jpg";
import eighth from "./assets/eighth.jpg";
import kittendAndPuppy from "./assets/kittenWithPuppy.png";
import curvedLine from "./../../components/FirstSection/assets/curvedLine.png";
import man from "./assets/faceMan.jpg";

//SVG
import Paw from "./assets/paws1.svg";
import ChevronLeft from "./assets/chevronLeft.svg";
import ChevronRight from "./assets/chevronRight.svg";
import Add from "./assets/add.svg";

const FifthSection = () => {
  return (
    <div className={styles.fifthSectionContainer}>
      <div className={styles.fifthTop}>
        <div className={styles.fifthTopImgs}>
          <div className={styles.first}>
            <Image
              src={first}
              width={300}
              height={340}
              alt="img"
              id={styles.imgFirst}
            />
          </div>
          <div className={styles.second}>
            <Image
              src={second}
              width={300}
              height={240}
              alt="img"
              id={styles.imgSecond}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={styles.third}>
            <Image
              src={third}
              width={300}
              height={340}
              alt="img"
              id={styles.imgThird}
            />
          </div>
          <div className={styles.fourth}>
            <Image
              src={fourth}
              width={300}
              height={340}
              alt="img"
              id={styles.imgFourth}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={styles.fifth}>
            <Image
              src={fifth}
              width={410}
              height={610}
              alt="img"
              id={styles.imgFifth}
            />
            <div className={styles.add}>
              <Add alt="add" />
            </div>
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={styles.sixth}>
            <Image
              src={sixth}
              width={300}
              height={340}
              alt="img"
              id={styles.imgSixth}
            />
          </div>
          <div className={styles.seventh}>
            <Image
              src={seventh}
              width={300}
              height={240}
              alt="img"
              id={styles.imgSeventh}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={styles.first}>
            <Image
              src={eighth}
              width={300}
              height={340}
              alt="img"
              id={styles.imgFirst}
            />
          </div>
          <div className={styles.fourth}>
            <Image
              src={ninth}
              width={300}
              height={240}
              alt="img"
              id={styles.imgNinth}
            />
          </div>
        </div>
      </div>
      <div className={styles.fifthCentral}>
        <div className={styles.textContainer}>
          <h2>What pet lovers say about us?</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readabe content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className={styles.authorContainer}>
            <div className={styles.authorLeftContainer}>
              <Image
                src={man}
                width={3760}
                height={3760}
                alt="man"
                id={styles.author}
              />
              <div className={styles.pseudoContainer}>
                <h5>Kenneth Fong</h5>
                <h6> Postgraduate Student</h6>
              </div>
            </div>
            <div className={styles.arrowsContainer}>
              <div className={styles.arrowContainer}>
                <ChevronLeft alt="chevron gauche" id={styles.leftChevron} />
              </div>
              <div className={styles.arrowContainer}>
                <ChevronRight alt="chevron droite" id={styles.rightChevron} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={curvedLine}
            width={609}
            height={509}
            alt="curvedLine"
            id={styles.curvedLine}
          />
          <Image
            src={kittendAndPuppy}
            width={1920}
            height={1434}
            alt="a kitten with a puppy"
            id={styles.fifthSectionImg}
          />
          <Paw alt="paw" id={styles.paw} />
        </div>
      </div>
      <div className={styles.fifthBottom}>
        <div className={styles.titleContainer}>
          <h3>Latest Post</h3>
          <Button color="black" withBorder variant="ovale" width="M">
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;