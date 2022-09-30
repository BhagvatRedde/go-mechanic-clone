import React, { useEffect } from "react";
import { Card } from "@mui/material";
import styles from "./Checkout.module.css";
import { useSelector } from "react-redux";
export const CheckoutCard = () => {
  // const checkoutData = useSelector((state: any) => state.checkout);
  const data = useSelector((state: any) => state.checkout);
  useEffect(() => {}, [data]);

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
      {/* {checkoutData &&
        checkoutData?.map((data: any) => (
          <> */}
      {data != null && (
        <>
          <div className={styles["item-row"]}>
            <div className="d-flex flex-column">
              <span className={styles["item-row-title"]}>{data.title}</span>
              <div className={styles["type-code"]}>
                <span className="me-2">{data.code}</span>
                <span>{data.type}</span>
              </div>
            </div>
            <div>
              <span className="mx-2">
                <s>₹ {data.originalPrice + data.price} </s>
              </span>
              <span>₹{data.totalPrice}</span>
              <span className="mx-2">
                <img src="images/servicePage/checkoutCard/cancel.svg" />
              </span>
            </div>
          </div>
          <hr className={styles["item-hr"]} />
        </>
      )}

      {/* </>
        ))} */}
    </Card>
  );
};
