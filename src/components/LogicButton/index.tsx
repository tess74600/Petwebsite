import React, { useState } from "react";
import styles from "./logicButton.module.scss";

import Button from "../Button";

import Add from "@/components/HorizontalCard/assets/plus.svg";
import Remove from "@/components/HorizontalCard/assets/minus.svg";

const LogicButton = ({ withTotal }: { withTotal: boolean }) => {
  let [total, setTotal] = useState(0);
  let [number, setNumber] = useState(0);

  return (
    <div className={styles.quantitiesContainer}>
      <Button width="XXS">
        <Remove
          onClick={() => {
            number > 0
              ? (setNumber(number - 1), setTotal(total - 40))
              : (setNumber(0), setTotal(0));
          }}
        />
      </Button>
      <Button width="XXS" color="transparent" withBorder>
        {number}
      </Button>
      <Button width="XXS">
        <Add
          onClick={() => {
            setNumber(number + 1);
            setTotal(total + 40);
          }}
        />
      </Button>
      {withTotal && <div className={styles.total}>${total}</div>}
    </div>
  );
};

export default LogicButton;
