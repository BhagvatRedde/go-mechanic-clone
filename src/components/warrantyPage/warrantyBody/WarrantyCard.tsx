import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./WarrantyBody.module.css";

const WarrantyCard = ({ data, selectedPriceHandler2}: any) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div>
        <Card className={styles["main-card"]}>
          <div className={styles["check-card"]}>
            <img
              src={data.cardImage}
              alt="Authorized Card"
              className={styles["authorized"]}
            ></img>
            <div>
              <h4 className={styles["card-title"]}>{data.title}</h4>
              <div className={styles["card-data"]}>
                {data.bullets.map((data: any) => (
                  <ul>
                    <li>{data}</li>
                  </ul>
                ))}
              </div>
              <div className="d-flex flex-column">
                <span className={styles["card-price"]}>₹ {data.price}</span>
                <span className={styles["card-para"]}>
                  No Cost EMI Available
                </span>
              </div>
            </div>
          </div>
          {isClicked ? (
            <button
              className={styles["card-btn-sec"]}
              role="button"
              onClick={() => {
                selectedPriceHandler2(data.price);
              }}
            >
              ADDED
            </button>
          ) : (
            <button
              className={styles["card-btn"]}
              role="button"
              onClick={() => {
                selectedPriceHandler2(data.price);
                setIsClicked(true);
              }}
            >
              ADD
            </button>
          )}

          <div className={styles["card-footer"]}>
            <span className={styles["footer-text"]}>View Covrage Details</span>
            <img
              className={styles["arrow"]}
              src="Warranty/coverage_detail.png"
            ></img>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WarrantyCard;
