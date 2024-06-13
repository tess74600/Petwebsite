import React from "react";
import styles from "./cartPage.module.scss";

//COMPONENTS
import Banner from "@/components/Banner/banner";

//SVG
import Airplane from "./assets/airPlane.svg";
import Box from "./assets/box.svg";
import CheckCircle from "./assets/checkCircle.svg";
import Button from "@/components/Button";
import HorizontalCard from "@/components/HorizontalCard";

const CartPage = () => {
  return (
    <div>
      <Banner page="Cart" source="cartPage" />
      <div className={styles.cartPageContainer}>
        <div className={styles.products}>
          <div className={styles.productTitles}>
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Subtotal</h4>
          </div>
          <div className={styles.productsContainer}>
            {/* <HorizontalCard product="Product" price="Price" /> */}
            <HorizontalCard product="brush" price="$40.00" />
            <HorizontalCard product="bone" price="$40.00" />
            <HorizontalCard product="bed" price="$40.00" />
            <HorizontalCard product="belt" price="$40.00" />
            <HorizontalCard product="cloth" price="$40.00" />
            <HorizontalCard product="toys" price="$40.00" />
          </div>
        </div>
        <div className={styles.cartTotal}>
          <h3>Cart Total</h3>
          <div className={styles.cartTotalContainer}>
            <div className={styles.cashback}>
              <h5>Bank Offer 5% CashBack</h5>
            </div>
            <div className={styles.freeShipping}>
              <Airplane />
              <div className={styles.textContainer}>
                <h6>Free</h6>
                <h5>Shipping</h5>
              </div>
            </div>
            <div className={styles.enjoyProduct}>
              <Box />
              <div className={styles.textContainer}>
                <h5>Enjoy the shopping</h5>
                <p>
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting
                </p>
              </div>
            </div>
            <div className={styles.save}>
              <CheckCircle />
              <h5> You will save ₹504 on this order</h5>
            </div>
            <div className={styles.totalAmount}>
              <h5>Total Amount</h5>
              <span>$125.75</span>
            </div>
            <Button color="black" variant="rectangle" width="L">
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
