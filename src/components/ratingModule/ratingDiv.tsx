import Grid from '@mui/material/Grid'
import React from 'react'
import styles from "./rating.module.css";
const RatingDiv = () => {
  return (
    <div>
       <Grid
        container
        spacing={{ xs: 1, md: 2}}
        columns={{ xs: 4, sm: 4, md: 4 }}
        className={styles["Benefit-data"]}
      >
        <div className={styles["font-style"]}>
          <span>2million+</span><br/>
          <span  className={styles["sub-text"]}>cars serviced</span>
        </div>
        <div className={styles["font-style"]}>
          <span>1million+</span><br/>
          <span  className={styles["sub-text"]}>cars serviced</span>
        </div>
        <div className={styles["font-style"]}>
          <span>4.7*</span><br/>
          <span  className={styles["sub-text"]}>cars serviced</span>
        </div>
        <div className={styles["font-style"]}>
          <span>800+</span><br/>
          <span className={styles["sub-text"]}>cars serviced</span>
        </div>
      </Grid>
    </div>
  )
}

export default RatingDiv;
