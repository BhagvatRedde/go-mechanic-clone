import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppHeader } from "../components/header/AppHeader";
import { ServiceModal } from "../components/serviceModal/ServiceModal";
import CustomServices from "../components/customServices/CustomServices";
import CarServices from "../components/carServices/CarServices";
import { MechanicBenefits } from "../components/goMechanicBenefit/mechanicBenefits";
import MechanicWork from "../components/goMechanicWork/mechanicWork";
import { StickyHeader } from "../components/stickyHeader/StickyHeader";

import { GoQuetion } from "../components/Quetions/GoQuetions";
import { Dash_saperator } from "../components/dash-saperator/Dash_saperator";
import OwnersFeedback from "../components/ownersFeedback/OwnersFeedback";

import axios from "axios";
import { WhyChoose } from "../components/choose/WhyChoose";
import { PriceTable } from "../components/priceTable/PriceTable";
import { Footer } from "../components/footer/Footer";
import { FooterEnd } from "../components/footer/FooterEnd";

import { SaveData } from "../redux-store/action";
import RatingDiv from "../components/ratingModule/ratingDiv";
import FestiveCarEssential from "../components/festiveCarEssential/FestiveCarEssential";
import Workshop from "../components/workshop/Workshop";
import LuxCars from "../components/lux-cars.tsx/LuxCars";
export const Home = () => {
  const [cityName, setCityName] = useState("Pune");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Alldata")
      .then((res) => {
        console.log(res.data);
        dispatch(SaveData(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const getCityName = (city: string) => {
    setCityName(city);
  };

  return (
    <div  >
      <div className={styles["bodyDiv"]}>

        <div className={styles["img-container"]}>
          <div className="d-flex">
            <AppHeader bgColor="transparent" getCityName={getCityName} />
          </div>
        </div>
        <ServiceModal cityName={cityName}  />
        <div className={styles["home-content"]}>
          <StickyHeader />
          <CarServices cityName={cityName} />
          <CustomServices />
          <FestiveCarEssential />
          <Workshop />
          <LuxCars />
          <MechanicWork />
          <MechanicBenefits />
          <RatingDiv />
          <OwnersFeedback />
          <GoQuetion />
          <WhyChoose />
          <PriceTable />
        </div>
      </div>
      <div  >
        <Footer />
        <FooterEnd />
      </div>
    </div>
  );
};
