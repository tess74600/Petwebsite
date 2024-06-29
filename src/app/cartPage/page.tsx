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
import GlobalContainer from "../components/GlobalContainer";

const CartPage = () => {
  return (
    <div>
      <Banner page="Cart" source="cartPage" />
      <GlobalContainer>
        <div className={styles.cartPageContainer}>
          <table className={styles.products}>
            <thead className={styles.productTitles}>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className={styles.productsContainer}>
              <HorizontalCard product="brush" price="$40.00" />
              <HorizontalCard product="bone" price="$40.00" />
              <HorizontalCard product="bed" price="$40.00" />
              <HorizontalCard product="belt" price="$40.00" />
              <HorizontalCard product="cloth" price="$40.00" />
              <HorizontalCard product="toys" price="$40.00" />
            </tbody>
          </table>
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
              <Button color="black" variant="rectangle" width="XXL">
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default CartPage;
