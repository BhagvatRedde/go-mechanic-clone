import Grid from "@mui/material/Grid";
import React from "react";
import styles from "./rating.module.css";
const RatingDiv = () => {
  return (
    <div className={styles["container"]}>
   
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 6, md: 12 }}
        className={styles["Benefit-data"]}
      >
        <div className={styles["font-style"]}>
          <span>2million+</span>
          <br />
          <span className={styles["sub-text"]}>Cars Serviced</span>
        </div>
        <div className={styles["font-style"]}>
          <span>1million+</span>
          <br />
          <span className={styles["sub-text"]}>Happy Customer</span>
        </div>
        <div className={styles["font-style"]}>
          <span>4.7</span>
          <br />
          <span className={styles["sub-text"]}>Average Rating</span>
        </div>
        <div className={styles["font-style"]}>
          <span>800+</span>
          <br />
          <span className={styles["sub-text"]}>Touch Point In India</span>
        </div>
      </Grid>
    </div>
  );
};

export default RatingDiv;
