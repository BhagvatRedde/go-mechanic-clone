import React from "react";
import Marquee from "react-fast-marquee";
// import Marquee from "react-css-marquee";

import styles from "../warrantyBody/WarrantyBody.module.css";
import { tagData } from "./TagData";
// const arr = ["abc", "cgg"];

const WarrantyBody = () => {
  return (
    <div>
      <div className={styles["warranty-subdiv"]}>
        <div className="row mt-4 mb-4">
          <div className={`${styles["custom-card"]} col-md-2`}>
            <img src="Warranty/Image A.jpg"></img>
          </div>
          <div className={`${styles["custom-card"]} col-md-2`}>
            <img src="Warranty/Image B.jpg"></img>
          </div>
          <div className={`${styles["custom-card"]} col-md-2`}>
            <img src="Warranty/Image C.jpg"></img>
          </div>
          <h3 className={styles["text"]}>Exrended Warranty</h3>
        </div>
        <div className={styles["mtag"]}>
          <Marquee speed={60} >
            {tagData.map((data: any) => (
              <div className={`${styles["tag"]} d-flex`}>
                <span className={styles["greendot"]}></span>
                {data}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WarrantyBody;
