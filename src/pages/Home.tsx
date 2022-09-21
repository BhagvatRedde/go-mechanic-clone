import styles from "./Home.module.css";

import { AppHeader } from "../components/header/AppHeader";
import { ServiceModal } from "../components/serviceModal/ServiceModal";
import CustomServices from "../components/customServices/CustomServices";
import CarServices from "../components/carServices/CarServices";
import { MechanicBenefits } from "../components/goMechanicBenefit/mechanicBenefits";
import MechanicWork from "../components/goMechanicWork/mechanicWork";
import { StickyHeader } from "../components/stickyHeader/StickyHeader";
import RatingDiv from "../components/ratingModule/ratingDiv";

import { useEffect, useState } from "react";

import axios from "axios";
import { WhyChoose } from "../components/choose/WhyChoose";
import { PriceTable } from "../components/priceTable/PriceTable";
import { Footer } from "../components/footer/Footer";
import { FooterEnd } from "../components/footer/FooterEnd";

export const Home = () => {
  // const [Alldata, setAlldata] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/Alldata")
  //     .then((res) => setAlldata(res.data))
  //     .catch((err: any) => console.log(err));
  //   console.log(Alldata);
  // }, [Alldata]);
  return (
    <div>
    <div>
      <div className={styles["img-container"]}>
        <div className="d-flex">
          <AppHeader />
        </div>
      </div>
      <ServiceModal />
      <div className={styles["home-content"]}>
        <StickyHeader />
        <CarServices />
        <CustomServices />
        {/* Slider Components */}
        <MechanicWork />
        <MechanicBenefits />
        <RatingDiv />
        <WhyChoose />
        <PriceTable />
      </div>
     
    </div>
    <div>
        <Footer />
        <FooterEnd/>
      </div>
    </div>
  );
};
