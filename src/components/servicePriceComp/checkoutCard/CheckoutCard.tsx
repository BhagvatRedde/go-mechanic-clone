import React from "react";
import { Card } from "@mui/material";
import styles from "./Checkout.module.css";
export const CheckoutCard = () => {
  return (
    <Card
      className={styles["checkout-card"]}
      sx={{ boxShadow: 12, borderRadius: 0 }}
    >
      <div className="text-center">
        <img src="images/carModels/model1.jpeg" alt="img" />
      </div>
      <div className="d-flex justify-content-between mx-2">
        <div className="d-flex">
          <h5 className="mx-2">Hyundai i10</h5>
          <span>Petrol</span>
        </div>
        <span className="">CHANGE</span>
      </div>
      <hr />
      {/* <div className={styles.trolly}>
        <img src="images/servicePage/checkoutCard/trolly.svg" alt="trolly" />
        <p className="mt-2">Go ahead and book a service for your car.</p>
      </div> */}
      <div className={styles["item-row"]}>
        <h6>Front Break Pads</h6>
        <div>
          <span>
            <s>₹ 5199 </s>
          </span>
          <span>₹3899</span>
          <span>
            <img src="images/servicePage/checkoutCard/cancel.svg" />
          </span>
        </div>
      </div>
      <hr className={styles["item-hr"]} />
    </Card>
  );
};
