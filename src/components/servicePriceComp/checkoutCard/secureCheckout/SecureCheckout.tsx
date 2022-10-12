import { Box } from "@material-ui/core";
import React from "react";
import { AddAddress } from "./addAddress/AddAddress";
import { DateTime } from "./dateTime/DateTime";
import { PaymentOptions } from "./payment/PaymentOptions";
import { PhoneNumber } from "./phoneNumber/PhoneNumber";
import styles from "./SecureCheckout.module.css";
export const SecureCheckout = () => {
  return (
    <>
      <Box
        boxShadow={3}
        sx={{ height: "5.5em" }}
        className={styles["checkout-header"]}
      >
        <div className={styles["checkout-headerDesc"]}>
          <img src="images/servicePage/checkoutCard/car.png" />

          <div>Secure Checkout</div>
        </div>
      </Box>

      <div className={styles["checkout-content"]}>
        <PhoneNumber />
        <DateTime />
        <AddAddress />
        <PaymentOptions></PaymentOptions>
      </div>
    </>
  );
};
