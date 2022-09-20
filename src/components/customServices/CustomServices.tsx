import React from "react";
import { Carousel } from "react-bootstrap";
import { CarAccessories } from "../serviceModal/carBrands";
import styles from "./CustomServices.module.css";
const CustomServices = () => {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   // slidesToShow: 1,
    //   // slidesToScroll: 1
    // };
  return (
    <>
      <div className="row mt-4">
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/miles.png"></img>
        </div>
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/warranty.png"></img>
        </div>
        <div className={`${styles["custom-card"]} col-md-2`}>
          <img src="images/customServices/accessories-1.png"></img>
        </div>
      </div>
      <div className={`${styles["custom-card"]} mt-8  w-25`}>
        <h2>Curated Custom Services</h2>
          <Carousel   >
            
          {CarAccessories.map((data) => (
             <Carousel.Item >
              <div className="d-flex flex-column  text-center ">
               
                <div className={styles["car-logo"]}>
                  <img
                    src={data.icon}
                    alt="icon"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span>{data.name}</span>
              </div>
              </Carousel.Item>
          ))}
          </Carousel>
      </div>
    </>
  );
};

export default CustomServices;
