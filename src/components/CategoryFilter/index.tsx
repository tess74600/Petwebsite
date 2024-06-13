import React from "react";
import styles from "./categoryFilter.module.scss";
const CategoryFilter = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className={styles.categoryFilter}>
      <div>{title}</div>
      <div>({content})</div>
    </div>
  );
};

export default CategoryFilter;
