import React from "react";
import styles from "./ownersFeedback.module.css";
import { feedback } from "./feedback";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import { Dash_saperator } from "../dash-saperator/Dash_saperator";

export default function OwnersFeedback() {
  const settings = {
    dots: true,
    // infinite: true,

    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
                  <div style={{ width: "50vh" }}>
                    <div className="row">
                      <div className="col-3">
                        <img
                          src={data.icon}
                          alt="img"
                          style={{ width: "80%", marginLeft: "2em" }}
                        />
                      </div>
                      <div className="col-7 mt-3">
                        <div
                          className={styles["feedback-name"]}
                          style={{ marginLeft: "-2em" }}
                        >
                          {data.name}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className={styles["feedback-socialName"]}>
                        {data.socialName}
                      </p>
                    </div>
                  </div>
                </div>
                <hr
                  style={{
                    color: "gray",
                    maxWidth: "28em",

                    alignmentBaseline: "central",
                  }}
                />
                <div className={styles["feedback-name"]}>
                  <h6 className={styles["workshop-name"]}>Workshop Name</h6>
                  <p className={styles["feedback-workshop"]}>{data.workShop}</p>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Slider>
      <Dash_saperator />
    </div>
  );
}
