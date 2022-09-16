import React from "react";
import styles from "./CustomServices.module.css";
const CustomServices = () => {
  return (
    <>
      <div className="row mt-4">
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/miles.png"></img>
        </div>
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/warranty.png"></img>
        </div>
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/accessories-1.png"></img>
        </div>
      </div>
      <div className="mt-4">
        <h2>Curated Custom Services</h2>
      </div>
    </>
  );
};

export default CustomServices;
