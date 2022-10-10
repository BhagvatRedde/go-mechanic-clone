import React from "react";
import { AppHeader } from "../../reusable/header/AppHeader";
import styles from "../warrantyHeader/WarrantyHeader.module.css";

const WarrantyHeader = () => {
  return (
    <div>
      <div className={`${styles["main-div"]}`}>
        <AppHeader bgColor="#0000" />
      </div>
    </div>
  );
};

export default WarrantyHeader;
