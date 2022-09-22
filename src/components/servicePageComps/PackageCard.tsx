import React from "react";
import { Card } from "@mui/material";
import styles from "./PackageCard.module.css";
import { PackageCardData } from "./data";
export const PackageCard = () => {
  //   const [firstList, setFirstList] = useState();
  return (
    <Card
      className={`${styles["card-container"]} rounded-0 shadow-none border`}
    >
      {PackageCardData.map((data, index) => (
        <>
          <div className="d-flex">
            <div>
              <img
                src={data.cardImage}
                alt="basic-service"
                className={styles["card-image"]}
              />
            </div>

            <div className={styles["service-data"]}>
              <h5>{data.title}</h5>
              <div className={styles["service-desc"]}>{data.desc}</div>
              <div>
                <ul className="list-unstyled card-columns">
                  {data.bullets.map((item) => (
                    <div>
                      <li className={`${styles["bullet-points"]} mb-2`}>
                        <img src={data.icon} alt="img" />
                        <span className={styles.bullet}>{item}</span>
                      </li>
                    </div>
                  ))}{" "}
                </ul>
                {/* <div className="row ">
                  <div className="col-md-6">
                    {data.bullets.slice(0, 3).map((item) => (
                      <div className="mb-2">
                        <img src={data.icon} alt="img" />
                        <span className={styles.bullet}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-6">
                    {data.bullets
                      .slice(
                        data.bullets.length / 2 + 1,
                        data.bullets.length - 2
                      )
                      .map((item) => (
                        <div className="mb-2">
                          <img src={data.icon} alt="img" />
                          <span className={styles.bullet}>{item}</span>
                        </div>
                      ))}
                  </div>
                </div> */}
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
            <button className="btn btn-outline-danger rounded-0">
              + ADD TO CART
            </button>
          </div>
        </>
      ))}
    </Card>
  );
};
