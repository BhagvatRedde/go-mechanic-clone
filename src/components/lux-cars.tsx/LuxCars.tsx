import React from 'react'
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import {  LuxCarsArray } from '../serviceModal/carBrands';

const LuxCars = () => {
    const AppData = useSelector((state: any) => state.data[0]);

    const settings = {
        loop: false,
        className: "center",
        // centerMode: true,
        infinite: false,
        centerPadding: "290px",
        slidesToShow: 3,
        speed: 300,
        rows: 1,
        slidesPerRow: 1,
      };
  return (
    <>
           <div id="curated-customer-service">
        <h2>Curated Custom Services</h2>

        <Slider {...settings}>
          { LuxCarsArray.map((data: any) => (
              //  <Carousel.Item  >
              <div className=" flex-column  text-center ">
                <div >
                  <img
                    src={data.icon}
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
  )
}

export default LuxCars;