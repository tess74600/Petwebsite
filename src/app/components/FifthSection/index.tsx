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
import curvedLine from "@/app/components/FirstSection/assets/curvedLine.png";
import man from "./assets/faceMan.jpg";

//SVG
import Paw from "./assets/paws1.svg";
import ChevronLeft from "./assets/chevronLeft.svg";
import ChevronRight from "./assets/chevronRight.svg";
import Add from "./assets/add.svg";
import classNames from "classnames";

const FifthSection = () => {
  return (
    <div className={styles.fifthSectionContainer}>
      <div className={styles.fifthTop}>
        <div className={styles.fifthTopImgs}>
          <div className={classNames(styles.ovfHidden, styles.first)}>
            <Image
              src={first}
              width={300}
              height={340}
              alt="img"
              id={styles.imgFirst}
              className={styles.img}
            />
          </div>
          <div className={classNames(styles.ovfHidden, styles.second)}>
            <Image
              src={second}
              width={300}
              height={240}
              alt="img"
              id={styles.imgSecond}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={classNames(styles.ovfHidden, styles.third)}>
            <Image
              src={third}
              width={300}
              height={340}
              alt="img"
              id={styles.imgThird}
              className={styles.img}
            />
          </div>
          <div className={classNames(styles.ovfHidden, styles.fourth)}>
            <Image
              src={fourth}
              width={300}
              height={240}
              alt="img"
              id={styles.imgFourth}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={classNames(styles.ovfHidden, styles.fifth)}>
            <Image
              src={fifth}
              width={410}
              height={610}
              alt="img"
              id={styles.imgFifth}
              className={styles.img}
            />
            <div className={styles.add}>
              <Add alt="add" />
            </div>
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={classNames(styles.ovfHidden, styles.sixth)}>
            <Image
              src={sixth}
              width={300}
              height={340}
              alt="img"
              id={styles.imgSixth}
              className={styles.img}
            />
          </div>
          <div className={classNames(styles.ovfHidden, styles.seventh)}>
            <Image
              src={seventh}
              width={300}
              height={240}
              alt="img"
              id={styles.imgSeventh}
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.fifthTopImgs}>
          <div className={classNames(styles.ovfHidden, styles.first)}>
            <Image
              src={eighth}
              width={300}
              height={340}
              alt="img"
              id={styles.imgEighth}
              className={styles.img}
            />
          </div>
          <div className={classNames(styles.ovfHidden, styles.fourth)}>
            <Image
              src={ninth}
              width={300}
              height={240}
              alt="img"
              id={styles.imgNinth}
              className={styles.img}
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
              <div>
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
