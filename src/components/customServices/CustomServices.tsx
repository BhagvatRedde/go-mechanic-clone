import { render } from "@testing-library/react";
import React from "react";
import { Carousel, Stack } from "react-bootstrap";
import Slider from "react-slick";
import { CarAccessories } from "../serviceModal/carBrands";
import styles from "./CustomServices.module.css";

// import Slider from 'react-slick';

const CustomServices = () => {
  
  const settings = {
    className: "center",
     centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    
  };
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
      <div className="mt-4" id="curated-customer-service">
        <h2>Curated Custom Services</h2>
          {/* <Carousel 
          controls={true}
          > */}
              <Slider  {...settings} >
            
          {CarAccessories.map((data) => (
            //  <Carousel.Item  >
              <div className=" flex-column  text-center ">
               
                <div className={`${styles["card-logo"]} w-100`}>

                  <img
                    src={data.icon}
                    alt="icon"
                    style={{ width: "25%", height: "25%" }}
                  />

                </div>

                <span>{data.name}</span>

              </div>
              // </Carousel.Item>
          ))}
              </Slider>

          {/* </Carousel> */}
      </div>
    </>
  );
};

export default CustomServices;
