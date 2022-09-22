import { Grid } from "@mui/material";
import React from "react";
import styles from "./WhyChose.module.css";
import { Data } from "./Data";
export const WhyChoose = () => {
  return (
    <>
      <h3 className={styles["heading-data"]}>Why Choose GoMechanic In Pune?</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <div className={styles["choose"]}>
          {Data.map((data: any, i: any) => (
            <div>
              <strong className={styles["Title"]}>{data.heading}</strong>

              <p className={styles["line-data"]}>{data.para}</p>
              {data.sub &&
                data.sub.map((item: any, i: any) => (
                  <div className={styles["choose"]}>
                    <strong className={styles["Title"]}>
                      {item.subheading}
                    </strong>

                    <p className={styles["line-data"]}>{item.para}</p>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </Grid>
    </>
  );
};
