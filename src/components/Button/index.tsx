import React, { ReactNode } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

const Button = ({
  children,
  variant = "round",
  color = "black",
  width = "L",
  withBorder,
}: {
  children: ReactNode;
  variant?: "round" | "rectangle" | "ovale";
  color?: "black" | "white" | "transparent";
  width?: "XXL" | "XL" | "L" | "M" | "S" | "XS" | "XXS";
  withBorder?: boolean;
}) => {
  return (
    <div
      className={classNames(
        styles.button,
        styles[color],
        styles[variant],
        styles[width],

        {
          [styles.border]: withBorder,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Button;
