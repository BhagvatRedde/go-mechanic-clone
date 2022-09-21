import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import styles from "./CustomServices.module.css";

// import Slider from 'react-slick';

const CustomServices = () => {
  const AppData = useSelector((state: any) => state.data[0]);

  const settings = {
    loop: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "290px",
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

        <Slider {...settings}>
          {AppData &&
            AppData[0]?.CustomServices?.map((data: any) => (
              //  <Carousel.Item  >
              <div className="   text-center ">
                <div className={`${styles["card-logo"]}`}>
                  <img
                    src={data.image}
                    alt="icon"
                    style={{ width: "100%", height: "100%", padding: "10%" }}
                  />
                </div>

                <span>{data.name}</span>
              </div>
            ))}
        </Slider>

        {/* </Carousel> */}
      </div>
    </>
  );
};

export default CustomServices;
