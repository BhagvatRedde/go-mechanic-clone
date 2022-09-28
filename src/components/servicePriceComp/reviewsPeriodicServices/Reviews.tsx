import React from "react";

import Grid from "@mui/material/Grid";
import { Dash_saperator } from "../../dash-saperator/Dash_saperator";
import StarIcon from '@mui/icons-material/Star';
import styles from "./Reviews.module.css";
import { reviewData } from "./reviewData";

export function Reviews({ data }: any) {


    return (
        <>
            <div className="" >

                {reviewData.map((data1: any, i: number) => (<>

                    <h3>{data1.header}</h3>

                    <Grid
                        container
                        spacing={{ xs: 1, md: 3 }}
                        columnSpacing={{ md: 0 }}
                        rowSpacing={{ md: 3 }}
                        columns={{ xs: 4, sm: 4, md: 12 }}
                    >
                        {data1.content.map((data: any, i: number) => (

                            <div className={styles["reviews-main"]}>
                                <div className="row">
                                    <div className="col-md-1">
                                        <img
                                            className={styles["review-img"]}
                                            src={data.Image}
                                            alt="img"
                                            style={{ width: "3em", height:"3em"}}
                                        />
                                    </div>

                                    <div className="col-md-8">
                                        <span className={styles["review-name"]}>{data.title}</span>
                                        <div >
                                            {data.star.map(() => (<StarIcon color="warning" />))}

                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <p className={styles["public-time"]}> Published 3 months ago</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={styles["review-info"]}>{data.review}</p>
                                </div>
                            </div>
                        ))}{" "}
                    </Grid>



                </>))}
            </div>

            <Dash_saperator />
        </>
    );
}
