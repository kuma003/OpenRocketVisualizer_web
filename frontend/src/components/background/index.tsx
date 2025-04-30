import React from "react";
import { Copyright } from "../copyright";
import styles from "./Background.module.scss";

const Background = () => {
  return (
    <div className={styles.background}>
      <Copyright />
    </div>
  );
}

export default Background;