import React from 'react'
import { festive } from '../serviceModal/carBrands';
import { Grid } from '@mui/material';
import styles from "./FestiveCarEssential.module.css";

const FestiveCarEssential = () => {
  return (
    <>
      <div className="mt-4">
        <h2>Curated Custom Services</h2>
        <Grid
            container
            spacing={{ xs: 1, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 28 }}
          >
            {festive.map((data, i) => (
              <Grid item xs={2} sm={4} md={4} key={i}>
                <div
                  className="d-flex flex-column justify-content-center text-center   "
                >
                  <div className={`${styles["car-logo"]} col-md-12 `}>
                    <img
                      src={data.icon}
                      alt="icon"
                      style={{ width: "200%", height: "200%", margin:"1%"}}
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </Grid>
            ))}   
          </Grid>
      </div>
    </>
  )
}

export default FestiveCarEssential;