import * as React from "react";
import Grid from "@mui/material/Grid";
import styles from "./HowItWorks.module.css";
import { Dash_saperator } from "../../reusable/dash-saperator/Dash_saperator";

export const HowDone = () => {
    return (
        <div>

            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 4, sm: 6, md: 12 }}

            >
                <div className={`${styles["main"]} row`} >
                    <div className="col-md-5" style={{}} >
                        <div >
                            <p className={styles["caption-p"]}>GoMechanic Service Warranty</p>
                            <hr className={styles["hr-line"]} />
                        </div>
                        <div className={styles["caption2-p"]}>1 Month Replacement Warranty On Oil, Filters & Brakes</div>
                    </div>
                    <div className="col-md-5" >

                    </div>
                    <div className="col-md-2">
                        <img

                            className={styles["model-img"]}
                            src={"/FeaturedImage/model.png"}
                            alt="img"
                            style={{ width: "100%" }}
                        />
                    </div>
                </div>

            </Grid>
            <div className={styles["knowMore"]}>know more</div>
            <Dash_saperator />
        </div>
    );
};
