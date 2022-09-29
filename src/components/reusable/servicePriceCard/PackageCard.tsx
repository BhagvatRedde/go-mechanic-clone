import { Card } from "@mui/material";
import styles from "./PackageCard.module.css";
import { PackageCardData } from "../../servicePriceComp/serviceTypes/periodic/data";
import { useState } from "react";
import EngineModal from "../../servicePriceComp/serviceTypes/periodic/engineModal/EngineModal";
export const PackageCard = ({ data, ...rest }: any) => {
  const [listCount, setListCount] = useState(5);
  const [showMore, setShowMore] = useState(true);
  const viewItemsHandeler = (data: any) => {
    setListCount(data.bullets.length);
    setShowMore(false);
  };
  return (
    <>
      <Card
        className={`${styles["card-container"]} rounded-0 shadow-none border`}
      >
        <div className="d-flex ">
          <div>
            <img
              src={data.cardImage}
              alt="basic-service"
              className={styles["card-image"]}
            />
          </div>

          <div className={styles["service-data"]}>
            <div className="d-flex justify-content-between">
              <h5>{data.title}</h5>
              <div className={styles["time-taken"]}>
                <img src="images/servicePage/clock.svg" /> Takes{" "}
                {data.timeTaken} Hours
              </div>
            </div>

            <div className={styles["service-desc"]}>{data.desc}</div>
            <div>
              <ul className="list-unstyled card-columns">
                {data.bullets.slice(0, listCount).map((item: any) => (
                  <div>
                    <li className={`${styles["bullet-points"]} mb-2`}>
                      <img src={data.icon} alt="img" />
                      <span className={styles.bullet}>{item}</span>
                    </li>
                  </div>
                ))}{" "}
                {showMore && data.bullets.length > 5 && (
                  <div
                    onClick={() => viewItemsHandeler(data)}
                    className={styles["show-more"]}
                  >
                    +{data.bullets.length - 5} more View All
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <span>
              <s>{`Rs ${data.price}`}</s>
            </span>
            <span className="mx-4 font-weight-bold">{`₹  ${Math.round(
              data.price - data.price * (data.discount / 100)
            )}`}</span>
          </div>
          <div>
            <button
              className="btn btn-outline-danger rounded-0"
              onClick={rest.onClickHandler}
            >
              + ADD TO CART
            </button>
          </div>
        </div>
      </Card>
      {/* <EngineModal open={rest.open} setOpen={rest.onClickHandler} data={data} /> */}
    </>
  );
};
