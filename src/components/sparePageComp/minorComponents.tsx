import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, Grid } from "swiper";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import {
  BodyParts,
  Lighting,
  Suspension,
  AirConditioning,
  BrakeSystem,
  OilsAndFluids,
  ClutchSystem,
  Filters,
  CarAccessories,
  FuelSystem,
  Fasteners,
  CoolingSystem,
  EngineParts,
  Electrical,
  Steering,
  BeltAndChainDrive,
  WheelsAndTyre,
  WindscreenCleaningSystem,
  Transmission,
  InteriorsComfortAndSafety,
  GasketAndSeals,
  ExhaustSystem,
} from "./images";
//
const FilledButton = ({ text, event}: any ) => {
  return (
    <span className="filledButton" onClick={() => event && event()}>
      {text}
    </span>
  );
};
const FloatingSearch = ({ display}: any ) => {
  return (
    <div className="floatingSearch" style={{ display }}>
      <span className="floatingRect"></span>

      <span>
        Find the part you need quickly and easily. Start your search now.
      </span>
      <div className="floatingSearchData">
        <span className="floatingDataHeading"> SEARCH TYPE</span>
        <span className="floatingDataHeading">EXAMPLE </span>
        <span>Part Number</span>
        <span> 22944BS739 </span>
        <span>Part Category </span>
        <span> Shock Absorber </span>
        <span>Part Category + Manufacturer </span>
        <span> Wiper Hyundai</span>
        <span>Part Category + Manufacturer + Model </span>
        <span> Brake Hyundia Verna</span>
      </div>
    </div>
  );
};

const PaginationSlider = ({ allPosters }:any) => {
  return (
    <div className="paginationSlider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {allPosters.map(({image, index}: any ) => {
          return (
            <span key={"slide" + index}>
              <SwiperSlide key={index}>
                <img src={image} alt="sliderImage" />
              </SwiperSlide>
            </span>
          );
        })}
      </Swiper>
    </div>
  );
};

const PaginationSliderSmall = ({ allSmallPosters }: any ) => {
  return (
    <div className="smallPaginationSlider">
      <Swiper
        slidesPerView={4}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allSmallPosters.map(({image, index}: any ) => {
          return (
            <span key={"smallSlide" + index}>
              <SwiperSlide key={index}>
                <img
                  src={image}
                  className="smallSliderImage"
                  alt="sliderImage"
                />
              </SwiperSlide>
            </span>
          );
        })}
      </Swiper>
    </div>
  );
};

const SpareParts = () => {
  let allSpareParts = [
    { name: "Body Parts", icon: BodyParts },
    { name: "Lighting", icon: Lighting },
    { name: "Suspension", icon: Suspension },
    { name: "Air Conditioning", icon: AirConditioning },
    { name: "Brake System", icon: BrakeSystem },
    { name: "Oils & Fluids", icon: OilsAndFluids },
    { name: "Clutch System", icon: ClutchSystem },
    { name: "Filters", icon: Filters },
    { name: "Car Accessories", icon: CarAccessories },
    { name: "Fuel System", icon: FuelSystem },
    { name: "Fasteners", icon: Fasteners },
    { name: "Cooling System", icon: CoolingSystem },
    { name: "Engine Parts", icon: EngineParts },
    { name: "Electrical", icon: Electrical },
    { name: "Steering ", icon: Steering },
    { name: "Belt & Chain Drive", icon: BeltAndChainDrive },
    { name: "Wheels & Tyre", icon: WheelsAndTyre },
    { name: "Windscreen Cleaning System", icon: WindscreenCleaningSystem },
    { name: "Transmission", icon: Transmission },
    { name: "Interiors Comfort & Safety", icon: InteriorsComfortAndSafety },
    { name: "Gasket & Seals", icon: GasketAndSeals },
    { name: "Exhaust System", icon: ExhaustSystem },
  ];

  return (
    <div className="spearParts">
      <span className="title">Search by Categories</span>
      <Swiper
        slidesPerView={6}
        grid={{
          rows: 2,
          fill: "row",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
      >
        {allSpareParts.map((part, index) => {
          return (
            <SwiperSlide key={index}>
              <span className="singleSparePart" key={"spare" + index}>
                <span className="spearPartIcon">
                  {" "}
                  <img
                    src={part.icon}
                    className="spearPartImage"
                    alt="spearPart"
                  />
                </span>
                <span className="spearPartName"> {part.name}</span>
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export {
  FilledButton,
  FloatingSearch,
  PaginationSlider,
  PaginationSliderSmall,
  SpareParts,
};
