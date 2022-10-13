import { ClassNames } from "@emotion/react";
import { Card } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SecureCheckout } from "../../servicePriceComp/checkoutCard/secureCheckout/SecureCheckout";
import { CardData } from "../warrantyBody/TagData";
import styles from "../warrantyCart/WarrantyCart.module.css";
const WarrantyCart = ({ selectedPrice }: any) => {
  const navigate = useNavigate();

  // console.log(selectedPrice);
  //   const cartDisplay = () => {
  //     if (selectedPrice !== "") {

  //     }
  //      return
  //  }
  return (
    <>
      {selectedPrice && (
        <div className={styles["cart-body"]}>
          <Card>
            <div className={`${styles["cart-text"]} d-flex`}>
              <ul>
                <li>₹ {selectedPrice}</li>
                <li>1 Warranty Added</li>
              </ul>

              <div>
                <button
                  className={styles["cart-btn"]}
                  role="button"
                  onClick={() => navigate("/cartPage")}
                >
                  View Cart
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default WarrantyCart;
