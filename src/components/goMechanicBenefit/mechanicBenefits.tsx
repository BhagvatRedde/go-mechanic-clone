import Grid from "@mui/material/Grid";
import React from "react";
import { MechanicBenefitData } from "./mechanicBenefit";
import styles from "./goBenefit.module.css";
export const MechanicBenefits = () => {
  return (
    <div id="gomechanic-benefits">
      <h3 className={styles["text-data"]}>GoMechanic Benefits</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
        className={styles["Benefit-data"]}
      >
        {MechanicBenefitData.map((data, i) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            key={i}
            className={styles["benefit-col"]}
          >
            <img
              className={styles["img-box"]}
              src={data.image}
              alt="img"
              style={{ width: "20%", height: "40%", marginTop: "5%" }}
            />

            <span className={styles["data-name"]}> {data.name}</span>
            <div className={styles["data-text"]}>{data.text}</div>
          </Grid>
        ))}
      </Grid>
      {/* <Grid
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
      </Grid> */}
    </div>
  );
};
