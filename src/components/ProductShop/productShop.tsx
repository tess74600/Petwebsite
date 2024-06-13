import React from "react";
import styles from "./productShop.module.scss";
import Image from "next/image";

//IMG

import bed from "./assets/bed.png";
import toy from "./assets/dogChewToys.png";

const ProductShop = ({ product }: { product: string }) => {
  const productSwitch = (parametre: string) => {
    switch (parametre) {
      case "Pet Bed For Dog":
        return (
          <>
            <div className={styles.productContainer}>
              <div className={styles.product}>
                <div className={styles.imgContainer}>
                  <Image
                    src={bed}
                    width={800}
                    height={800}
                    alt="bed"
                    className={styles.img}
                  />
                </div>
                <h5>Pet Bed For Dog</h5>
              </div>
              <div className={styles.price}>$40.00</div>
            </div>
          </>
        );
        break;
      case "Dog Chew Toys":
        return (
          <>
            <div className={styles.productContainer}>
              <div className={styles.product}>
                <div className={styles.imgContainer}>
                  <Image
                    src={toy}
                    width={611}
                    height={408}
                    alt="toy"
                    className={styles.img}
                  />
                </div>
                <h5>Dog Chew Toys</h5>
              </div>
              <div className={styles.price}>$40.00</div>
            </div>
          </>
        );
        break;
      default:
        null;
    }
  };
  return productSwitch(product);
};

export default ProductShop;
