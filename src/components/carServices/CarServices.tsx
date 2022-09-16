import React from "react";
import { CarServicesData } from "./carServiceData";
import { Grid } from "@mui/material";
import styles from "./carServices.module.css";
const CarServices = () => {
  return (
    <div>
      <h3>Car Services Available In Pune</h3>
      <p className={styles["heading-data"]}>
        Get Affordable and hassle-free periodic car service,car repair,wheel
        care services, Cashless insurance services claim and much more in Queen
        of Deccan Pune.
      </p>

      <Grid
        container
        spacing={{ xs: 1, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {CarServicesData.map((data, i) => (
          <Grid item xs={4} sm={4} md={3} key={i}>
            <div className={styles["car-service"]}>
              <img
                src={data.image}
                alt="img"
                style={{ width: "50%", height: "50%" }}
              />
              <div className="mt-2">{data.name}</div>
            </div>
          </Grid>
        ))}
      </Grid>
      {/* ))} */}
    </div>
  );
};

export default CarServices;