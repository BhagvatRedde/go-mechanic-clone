import React, { useEffect, useState } from "react";
import styles from "./mechanicWork.module.css";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { MechanicWorkData } from "./mechanicWorkData";
const MechanicWork = () => {
  // const [MechanicWorkData, setMechanicWorkData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/MechanicWorkData")
  //     .then((res) => setMechanicWorkData(res.data))
  //     .catch((err: any) => console.log(err));
 
  // }, [MechanicWorkData]);
  const Work = ({ items }: any) => (
    <ul className={styles["line"]}>
      {items.map((data: any, i: number) => (
        <li key={i} className="name-data d-flex ">
          <div className="d-flex flex-column pt-4">
            <span className={styles["data-name"]}> {data.name}</span>

            <span className={styles["data-text"]}>{data.text}</span>
          </div>
          <div className={styles["img-box"]}>
            <img
              src={data.image}
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={styles["Benefit-data"]}>
      <h3 className={styles["heading-content"]}>How GoMechanic Works?</h3>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 4, md: 8 }}
      >
        <Work items={MechanicWorkData} />;
      </Grid>
    </div>
  );
};

export default MechanicWork;
