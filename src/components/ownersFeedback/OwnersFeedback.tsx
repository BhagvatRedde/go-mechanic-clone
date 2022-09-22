import React from "react";
import styles from "./ownersFeedback.module.css";
import { feedback } from "./feedback";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";

export function OwnersFeedback() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "-2000px",
    slidesToShow: 2,
    speed: 300,
    rows: 1,
    slidesPerRow: 7,
  };
  return (
    <div className={styles["feedback-main"]}>
      <h3>What Car Owners In Pune Say</h3>


      <Slider {...settings}>

        {feedback.map((data, i) => (
          <Grid item xs={2} sm={4} md={3} key={i}>
            <div className={styles["feedback"]}>
              <img
                src="socialMedia/invertedComma.png"
                className={styles["comma"]}
              />
              <div className="card-body">
                <h5 className={styles["feedback-title"]}>{data.title}</h5>

                <p className={styles["feedback-info"]}>{data.info}</p>
                <div className={styles["feedback-icon"]}>
                  <img
                    src={data.icon}
                    alt="img"
                    style={{ width: "15%", height: "15%", marginLeft: "2em" }}
                  />
                  <span className={styles["feedback-name"]}>{data.name}</span>

                  <p className={styles["feedback-socialName"]}>
                    {data.socialName}
                  </p>
                </div>
                <hr
                  style={{
                    color: "gray",
                    width: "25em",
                    alignmentBaseline: "central",
                  }}
                />
                <div className={styles["feedback-name"]}>
                  <h6 className={styles["workshop-name"]}>Workshop Name</h6>
                  <p className={styles["feedback-workshop"]}>
                    {data.workShop}
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Slider>


    </div>
  );
}
