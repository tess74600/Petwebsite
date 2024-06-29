"use client";
import Banner from "@/components/Banner/banner";
import styles from "./checkout.module.scss";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

//COMPONENTS
import ProductShop from "@/components/ProductShop/productShop";
import Button from "@/components/Button";
import GlobalContainer from "../components/GlobalContainer";

//SVG
import Chevron from "./assets/chevronRight.svg";

//IMG
import paypal from "./assets/payPal.png";

enum CountryEnum {
  india = "india",
  france = "france",
  england = "england",
}
enum CityEnum {
  kotah = "kotah",
  newDehli = "new Delhi",
  bombay = "bombay",
}

enum StateEnum {
  maharashtra = "maharashtra",
  rajasthan = "rajasthan",
  delhi = "delhi",
}
interface IFormInput {
  firstName: string;
  lastName: string;
  country: CountryEnum;
  city: CityEnum;
  state: StateEnum;
  company: string;
  street: string;
  apartment: number;
  ZipCode: number;
  tel: number;
  email: string;
  account: [];
  ship: [];
  shipping: [];
  // flatRate: [];
  // bankTransfert: [];
  // cashOnDelivery: [];
  // payPal: [];
  paiement: [];
  cgv: [];
}
const Checkout = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      apartment: undefined,
      ZipCode: undefined,
      tel: undefined,
      email: "",
    },
  });

  console.log(errors);

  return (
    <div>
      <Banner page="Checkout" source="checkout" />
      <GlobalContainer>
        <div className={styles.checkoutContainer}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit((data) => {
              console.log(data);
              reset();
            })}
          >
            <h3>Billing Details</h3>

            <div className={styles.customer}>
              <div className={styles.chevron}>
                <select id="customer" name="customer">
                  <option value="customer">
                    Returning customer?Click here to login
                  </option>
                </select>
                <Chevron className={styles.chevronSVG} />
              </div>
              <div className={styles.chevron}>
                <select id="coupon" name="coupon">
                  <option value="coupon">
                    Have a coupon? Click here to enter your code
                  </option>
                </select>
                <Chevron className={styles.chevronSVG} />
              </div>
            </div>

            <div className={styles.identity}>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "min length is 4",
                    },
                  })}
                />
                <p className={styles.error}> {errors.firstName?.message}</p>
              </div>
              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  {...register("lastName", {
                    required: "This is required",
                    minLength: {
                      value: 3,
                      message: "min length is 3",
                    },
                  })}
                />
                <p className={styles.error}> {errors.lastName?.message}</p>
              </div>
            </div>
            <div>
              <h4>Company name (optional)</h4>
              <input type="text" id="company" {...register("company")} />
            </div>
            <div>
              <h4>Country/Region*</h4>
              <div className={styles.chevron}>
                <select
                  id="country"
                  {...register("country", { required: "This is required" })}
                >
                  <option value="India"></option>
                  <option value="France">France</option>
                  <option value="England">England</option>
                </select>
                <Chevron className={styles.chevronSVG} />
                <p className={styles.error}> {errors.country?.message}</p>
              </div>
            </div>
            <h4>Street Address *</h4>
            <div className={styles.address}>
              <input
                type="text"
                {...register("street", { required: "This is required" })}
                placeholder="House number and street name"
              />
              <p className={styles.error}> {errors.street?.message}</p>

              <input
                type="text"
                {...register("apartment")}
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div>
              <h4>Town/City*</h4>
              <div className={styles.chevron}>
                <select
                  id="city"
                  {...register("city", { required: "This is required" })}
                >
                  <option value="kotah">Kotah</option>
                  <option value="newDelhi">New delhi</option>
                  <option value="bombay">Bombay</option>
                </select>
                <Chevron className={styles.chevronSVG} />

                <p className={styles.error}> {errors.city?.message}</p>
              </div>
            </div>
            <div>
              <h4>State*</h4>
              <div className={styles.chevron}>
                <select
                  id="state"
                  {...register("state", { required: "This is required" })}
                >
                  <option value="rajasthan">Rajasthan</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                </select>
                <Chevron className={styles.chevronSVG} />
                <p className={styles.error}> {errors.state?.message}</p>
              </div>
            </div>
            <div>
              <h4>ZIP Code *</h4>
              <input
                type="text"
                {...register("ZipCode", { required: "This is required" })}
              />
              <p className={styles.error}> {errors.ZipCode?.message}</p>
            </div>
            <div>
              <h4>Phone *</h4>
              <input
                type="tel"
                {...register("tel", { required: "This is required" })}
              />
              <p className={styles.error}> {errors.tel?.message}</p>
            </div>
            <div>
              <h4>Email address*</h4>
              <input
                type="mail"
                {...register("email", { required: "This is required" })}
              />
              <p className={styles.error}> {errors.email?.message}</p>
            </div>
            <div>
              <div className={styles.checkbox}>
                <input
                  type="checkbox"
                  {...register("account")}
                  id={styles.account}
                />
                <label htmlFor="account">Create an account?</label>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" {...register("ship")} id="ship" />
                <label htmlFor="ship">Ship to a different address?</label>
              </div>
            </div>
            <div>
              <h4>Order notes (optional)</h4>
              <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
            </div>
            <input type="submit" value="Send" />
          </form>
          <div className={styles.order}>
            <h3>Your Order</h3>
            <div className={styles.globalContainer}>
              <ProductShop product="Pet Bed For Dog" />
              <ProductShop product="Dog Chew Toys" />

              <div className={styles.subtotal}>
                <h4>Subtotal</h4>
                <span>$80</span>
              </div>
              <div className={styles.shipping}>
                <h4>Shipping</h4>
                <form>
                  <div>
                    <input
                      type="radio"
                      {...register("shipping")}
                      id="freeShipping"
                      value="freeShipping"
                      className={styles.orderCheckout}
                    />
                    <label htmlFor="freeShipping">Free shipping</label>
                  </div>
                  <div className={styles.flatRate}>
                    <div>
                      <input
                        type="radio"
                        {...register("shipping")}
                        value="flatRate"
                        className={styles.orderCheckout}
                      />
                      <label htmlFor="flatRate">Flat Rate:</label>
                    </div>
                    <span> 25.75</span>
                  </div>
                </form>
              </div>
              <div className={styles.total}>
                <h4>Total</h4>
                <span>$80.00</span>
              </div>
              <form className={styles.paiements}>
                <div>
                  <input
                    type="radio"
                    {...register("paiement")}
                    value="bankTransfert"
                    className={styles.orderCheckout}
                  />
                  <label>Direct bank transfer</label>
                </div>
                <p>
                  Direct bank transfer, also known as a wire transfer, is a
                  secure electronic method for moving funds between bank
                  accounts.
                </p>

                <div>
                  <input
                    type="radio"
                    {...register("paiement")}
                    value="cashOnDelivery"
                    className={styles.orderCheckout}
                  />
                  <label>Cash on delivery</label>
                </div>
                <div className={styles.payPal}>
                  <div>
                    <input
                      type="radio"
                      {...register("paiement")}
                      id="payPal"
                      className={styles.orderCheckout}
                    />
                    <label>PayPal</label>
                  </div>
                  <Image
                    src={paypal}
                    width={319}
                    height={110}
                    alt="paypal and other paiments"
                    id={styles.imgPaypal}
                  />
                  <span>What is PayPal?</span>
                </div>
              </form>

              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <span>privacy policy</span>
              </p>
              <form className={styles.cgv}>
                <input
                  type="checkbox"
                  {...register("cgv")}
                  id="cgv"
                  className={styles.cgvCheckout}
                />
                <label htmlFor="cgv">
                  I have read and agree to the website terms and conditions
                </label>
              </form>
              <Button color="black" variant="rectangle" width="M">
                PLACE ORDER
              </Button>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default Checkout;
