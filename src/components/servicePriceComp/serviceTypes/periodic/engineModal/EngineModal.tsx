import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, Slide } from "@mui/material";
import { oilContent } from "./data";
import styles from "./EngineModal.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCheckoutData } from "../../../../../redux-store/action";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",

  outline: "none",

  zIndex: 1,
};

export default function EngineModal({ open, setOpen, data }: any) {
  const dispatch = useDispatch();
  const [rowItem, setRowItem] = useState({
    title: "",
    type: "",
    code: "",
    price: 0,
    originalPrice: 0,
    totalPrice: 0,
  });
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const totalPrice =
      Math.round(data.price - data.price * (data.discount / 100)) +
      rowItem.price;
    setRowItem({ ...rowItem, totalPrice: totalPrice });
  }, [totalPrice, rowItem.price]);
  // let totalPrice: any;

  const handleClose = () => setOpen();
  const totalPriceHandler = (dataPrice: any, dataDiscount: any) => {
    const totalPrice =
      Math.round(dataPrice - dataPrice * (dataDiscount / 100)) + rowItem.price;
    setTotalPrice(totalPrice);
    // return totalPrice;
  };

  const sendCheckoutData = () => {
    console.log(rowItem);
    dispatch(AddCheckoutData(rowItem));
  };

  return (
    <div>
      {/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <div className={styles["card-header"]}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {data.title}
            </Typography>
            <Typography className={styles["engine-oil"]}>
              Select Engine Oil
            </Typography>
          </div>
          <div className="d-flex mx-2">
            {oilContent.map((item) => (
              <Card sx={{ width: "20em", margin: ".5em" }}>
                <div className={styles["inner-div"]}>
                  <h5>{item.type}</h5>
                  <span>{item.code}</span>
                  <p>{item.desc}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mx-2 mb-2">
                  <div>₹ {item.price}</div>
                  <input
                    type="radio"
                    name="engine"
                    value={item.price}
                    onChange={() =>
                      setRowItem({
                        ...rowItem,
                        title: data.title,
                        originalPrice: data.price,
                        type: item.type,
                        code: item.code,
                        price: item.price,
                      })
                    }
                  />
                </div>
              </Card>
            ))}
          </div>
          <div className={styles["card-footer"]}>
            <h5>Boost Your Service</h5>
            <p>For better performance & mileage</p>
          </div>
          <div className="d-flex justify-content-between m-2">
            <div className={styles["total-price"]}>
              Total Rs. {/* {totalPriceHandler(data.price, data.discount)} */}
              {rowItem.totalPrice}
            </div>
            <button className="btn btn-danger" onClick={sendCheckoutData}>
              +ADD
            </button>
          </div>
        </Box>
      </Modal>
      {/* </Slide> */}
    </div>
  );
}
