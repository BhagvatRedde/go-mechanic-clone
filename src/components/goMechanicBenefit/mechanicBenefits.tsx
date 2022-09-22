import Grid from "@mui/material/Grid";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./goBenefit.module.css";
export const MechanicBenefits = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  return (
    <div id="gomechanic-benefits">
      <h3 className={styles["text-data"]}>GoMechanic Benefits</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
        className={styles["Benefit-data"]}
      >
        {AppData &&
          AppData[0].MechanicBenefitData?.map((data: any, i: number) => (
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              key={i}
              className={styles["benefit-col"]}
            >
            <div className={`${styles["main-box"]} row `}>
              <img
                className={`${styles["img-box"]} col-md-6 float-left m-4`}
                src={data.image}
                alt="img"
                style={{ width: "28%", height: "40%", marginTop: "5%" }}
              />
              <div className={`${styles["text-box"]} col-md-6 `}>
                  <div className={styles["data-name"]}>{data.name}</div>
              
                  <div className={styles["data-text"]}>{data.text}</div>
              </div>
              </div>
            
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
