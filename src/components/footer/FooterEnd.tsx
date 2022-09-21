import React from "react";
import { FooterEndData } from "./FooterEndData";
import styles from "./Footer.module.css";
export const FooterEnd = () => {
  return (
    <div className={styles["footer-last"]}>
      <div className={`${styles["div-content"]} d-flex `}>
        <div className={styles["first-div"]}>
          <img
            src="images/footer/WHITE.png"
            alt="img"
            style={{ width: "45%", height: "20%" }}
            className={`${styles["img-size"]} mt-5 `}
          />
          {FooterEndData.map((data: any, i: any) => (
            <p className={`${styles["para"]} col-md-6 `}> {data.text}{data.text2}</p>
          ))}
        </div>
        <div className="d-flex">
          <div>
            {FooterEndData.map((data: any, i: any) => (
              <div className="row">
                <div className= {`${styles["para"]} col mb-2 `}>{data.name}</div>
                <div className={`${styles["para"]} col `}>
                  <div> {data.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles["image-position"]}>
            <img
              src="images/footer/appstore.png"
              alt="img"
              style={{ width: "15%", height: "25%" }}
             
            />
            <br />
            <br />
            <img
              src="images/footer/playstore.png"
              alt="img"
              style={{ width: "15%", height: "25%" }}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};
