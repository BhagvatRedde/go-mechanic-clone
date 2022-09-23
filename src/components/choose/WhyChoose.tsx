import { Grid } from "@mui/material";
import React from "react";
import styles from "./WhyChose.module.css";
import { Data } from "./Data";
import { Dash_saperator } from "../dash-saperator/Dash_saperator";
export const WhyChoose = () => {
  return (
    <div>
      <h3 className={styles["heading-data"]}>Why Choose GoMechanic In Pune?</h3>

      <div className={styles["choose-container"]}>
        {Data.map((data: any, i: any) => (
          <div>
            <strong className={styles["Title"]}>{data.heading}</strong>

            <p className={styles["line-data"]}>{data.para}</p>
            {data.sub &&
              data.sub.map((item: any, i: any) => (
                <div className={styles["choose"]}>
                  <strong className={styles["Title"]}>{item.subheading}</strong>

                  <p className={styles["line-data"]}>{item.para}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <Dash_saperator />
    </div>
  );
};
