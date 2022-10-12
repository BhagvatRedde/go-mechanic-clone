import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { F_Question } from "../../reusable/F_Question/F_Question";
// import Marquee from "react-css-marquee";

import styles from "../warrantyBody/WarrantyBody.module.css";
import WarrantyCart from "../warrantyCart/WarrantyCart";
import { CardData, freqQuestions, SubCarData, tagData } from "./TagData";
import WarrantyCard from "./WarrantyCard";
// const arr = ["abc", "cgg"];

const WarrantyBody = () => {
  const [selectedPrice, setSelectedPrice] = useState();

  const selectedPriceHandler = (price:any) => {
    setSelectedPrice(price);
    // console.log("hello")
    return (
   <></>
    )
    }

  return (
    <>
      <div className={styles["warranty-maindiv"]}>
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
            <Marquee speed={60}>
              {tagData.map((data: any) => (
                <div className={`${styles["tag"]} d-flex`}>
                  <span className={styles["greendot"]}></span>
                  {data}
                </div>
              ))}
            </Marquee>
          </div>
          {CardData.map((data: any) => (
            <WarrantyCard
              data={data}
              selectedPriceHandler2={selectedPriceHandler}
            />
          ))}
          <div className={styles["graph"]}>
            <h3 className={styles["graph-title"]}>Your Warranty Savings</h3>
            <h4 className={styles["graph-para"]}>
              Save more than 50% with Warranty Plans
            </h4>
            <img
              src="Warranty/graph-new.png"
              className={styles["graph-image"]}
            ></img>
          </div>
        </div>
        {/* second div */}
        <div className={`${styles["third-div"]}`}>
          <h4>
            <b>One-Click Claim</b>
          </h4>
          <div className={styles["step-card"]}>
            <Card>
              <ul>
                <li className={styles["_li"]}>
                  <div className={styles["li-item"]}>1</div>
                  <p className={styles["para"]}>
                    Click Claim Warranty in Account Screen
                  </p>
                </li>
                <div className={styles["line"]}></div>
                <li className={styles["_li"]}>
                  <div className={styles["li-item"]}>2</div>
                  <p className={styles["para"]}>
                    Choose Pickup Location,Date & Time
                  </p>
                </li>
                <div className={styles["line"]}></div>
                <li className={styles["_li"]}>
                  <div className={styles["li-item"]}>3</div>
                  <p className={styles["para"]}>
                    Service Buddy will get the Claim Processed
                  </p>
                </li>
              </ul>
            </Card>
            <div className={styles["milestone"]}>
              <h4>
                <b>Milestones Achieved</b>
              </h4>

              <div className={styles["subcard-container"]}>
                {SubCarData.map((data: any) => (
                  <Card
                    style={{ backgroundColor: data.color }}
                    className={`${styles["subcard"]}  `}
                  >
                    <img className={styles["sub-image"]} src={data.Image}></img>
                    <h3 className={styles["sub-tilte"]}>{data.Title}</h3>
                    <p className={styles["sub-para"]}>{data.Info} </p>
                  </Card>
                ))}
              </div>
            </div>
            {/* Frequently asked questions */}
            <F_Question data={freqQuestions} className={styles["acordian"]} />
          </div>
        </div>
        {/* Cart */}
        <WarrantyCart selectedPrice={selectedPrice} />
      </div>
      {/* <WarrantyFooter/> */}
    </>
  );
};

export default WarrantyBody;
