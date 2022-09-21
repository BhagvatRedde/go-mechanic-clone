import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";

import styles from "./goBenefit.module.css";
import axios from "axios";
import { MechanicBenefitData } from "./mechanicBenefit";
export const MechanicBenefits = () => {
  // const [MechanicBenefitData, setMechanicBenefitData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/MechanicBenefitData")
  //     .then((res) => setMechanicBenefitData(res.data))
  //     .catch((err: any) => console.log(err));
  
  // }, [MechanicBenefitData]);
  return (
    <div className="mb-3">
      <h3 className={styles["text-data"]}>GoMechanic Benefits</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
        className={styles["Benefit-data"]}
      >
        {MechanicBenefitData.map((data: any, i: any) => (
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
    </div>
  );
};
