import React from "react";

import styles from "./page404.module.scss";
import Image from "next/image";

//IMG
import cat from "./assets/cat404.png";
const Page404 = () => {
  return (
    <div className={styles.page404Container}>
      <Image src={cat} width={568} height={440} alt="cat404" />
    </div>
  );
};

export default Page404;
