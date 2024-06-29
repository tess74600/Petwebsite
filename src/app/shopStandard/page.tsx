import React from "react";
import styles from "./shopStandard.module.scss";
import classNames from "classnames";

//COMPONENTS
import Banner from "@/components/Banner/banner";
import CategoryFilter from "@/components/CategoryFilter";
import Button from "@/components/Button";
import Card from "@/components/Card";
import GlobalContainer from "../components/GlobalContainer";

//SVG
import Filter from "./assets/filter.svg";
import Search from "@/components/Header/assets/search.svg";
import X from "./assets/x.svg";
import Chevron from "./assets/chevronDown.svg";
import List1 from "./assets/list1.svg";
import List2 from "./assets/list2.svg";
import List3 from "./assets/list3.svg";

const ShopStandard = () => {
  return (
    <div>
      <Banner page="Shop Standard" source="shopStandard" />
      <GlobalContainer>
        <div className={styles.shopStandardContainer}>
          <div className={styles.shopSideBarFilter}>
            <div className={styles.filters}>
              <Filter />
              <h5>Filters</h5>
            </div>
            <div className={styles.searchProduct}>
              <p>Search Product</p>
              <Search />
            </div>
            <div className={styles.priceContainer}>
              <h4>Price</h4>
              <div className={styles.minMaxDisplay}>
                <form>
                  <div className={styles.doubleRange}>
                    <div className={styles.line}>
                      <div className={styles.middleLine}></div>
                      <div
                        className={classNames(styles.thumb1, styles.thumb)}
                      ></div>
                      <div
                        className={classNames(styles.thumb2, styles.thumb)}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.label}>
                    <div className={styles.minPrice}>Min Price: $19</div>
                    <div className={styles.maxPrice}>Max Price:$346</div>
                  </div>
                </form>
              </div>
            </div>
            <div className={styles.categories}>
              <h4>Category</h4>
              <div className={styles.categoriesContent}>
                <CategoryFilter title="Dog Food" content="15" />
                <CategoryFilter title="Dog Toys" content="22" />
                <CategoryFilter title="Dog Health" content="10" />
                <CategoryFilter title="Dog Beds" content="3" />
                <CategoryFilter title="Dog Bowls" content="8" />
                <CategoryFilter title="Dog Gadgets" content="2" />
                <CategoryFilter title="Dog Products" content="7" />
              </div>
            </div>
            <div className={styles.tags}>
              <h4>Tags</h4>
              <div className={styles.tagsContainer}>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Push Toys
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Dog Collars
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Cotton
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Training
                </Button>
                <Button color="black" variant="rectangle" width="XS">
                  Pet Bed
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Dried Food
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Elevated Beds
                </Button>
                <Button
                  color="transparent"
                  variant="rectangle"
                  withBorder
                  width="XS"
                >
                  Health Products
                </Button>
              </div>
            </div>
            <Button color="black" variant="rectangle" width="XL">
              RESET
            </Button>
          </div>

          <div className={styles.displayResults}>
            <div className={styles.displayFilters}>
              <div className={styles.left}>
                <Button
                  color="transparent"
                  variant="ovale"
                  withBorder
                  width="XS"
                >
                  Dog Food
                  <X />
                </Button>
                <Button
                  color="transparent"
                  variant="ovale"
                  withBorder
                  width="XS"
                >
                  Dog Toys
                  <X />
                </Button>
                <Button
                  color="transparent"
                  variant="ovale"
                  withBorder
                  width="XS"
                >
                  Dog Health
                  <X />
                </Button>
                <p> Showing 1-5 Of 50 Results</p>
              </div>
              <div className={styles.right}>
                <div className={styles.arrow}>
                  Default sorting <Chevron />
                </div>
                <div className={styles.arrow}>
                  Categories <Chevron />
                </div>
                <div className={styles.rightIcons}>
                  <List1 />
                  <List2 />
                  <List3 />
                </div>
              </div>
            </div>
            <div className={styles.results}>
              <Card title="Dog Body Belt" source="belt" />
              <Card title="Dog Clothes" source="cloth" />
              <Card title="Pet Bed For Dog" source="bed" />
              <Card title="Dog Chew Toys" source="toy" />
              <Card title="The Bone Dog Toy" source="bone" />
              <Card title="Dog Rope Combo" source="rope" />
              <Card title="Squeaky Ball Dog Toy" source="ball" />
              <Card title="Dog Small Pillow" source="pillow" />
              <Card title="The Bone Dog Toy" source="bone" />
              <Card title="Dog Rope Combo" source="rope" />
              <Card title="Squeaky Ball Dog Toy" source="ball" />
              <Card title="Dog Small Pillow" source="pillow" />
            </div>
          </div>
        </div>
      </GlobalContainer>
    </div>
  );
};

export default ShopStandard;
