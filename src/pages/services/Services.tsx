import styles from "./Servics.module.css";
import { AppHeader } from "../../components/reusable/header/AppHeader";

import RatingDiv from "../../components/reusable/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";
import { HondaAmaze } from "../../components/servicePriceComp/customerQuotes/HondaAmaze/HondaAmaze";
import { AskedQuestions } from "../../components/servicePriceComp/AskedQuetions/AskedQuetions";

import { useState } from "react";
import { CheckoutCard } from "../../components/servicePriceComp/checkoutCard/CheckoutCard";
import { WhyHonda } from "../../components/servicePriceComp/whyChooseForBrand/WhyHonda";
import { SwiperComp } from "../../components/reusable/Swiper/SwiperComp";
import { PopularServices } from "../../components/servicePriceComp/Populars/PopularServices";
import { PopularRegion } from "../../components/servicePriceComp/popularRegion/PopularRegion";

import { Reviews } from "../../components/servicePriceComp/reviewsPeriodicServices/Reviews";
import { ServiceKey } from "../../components/servicePriceComp/keySpecs/ServiceKey";
import { Done } from "../../components/servicePriceComp/HowItWorks/Done";


export function Services() {
  const [cityName, setCityName] = useState("Pune");
  const [checkoutData, setCheckoutData] = useState([]);
  const [passedIndex, setPassedIndex] = useState(0);
  const getCityName = (city: string) => {
    setCityName(city);
  };
  const checkoutDataHandler = (data: any) => {
    setCheckoutData(data);
  };
  const passIndexHandler = (index: number) => {
    console.log(index)
    setPassedIndex(index);
  }
  return (
    <div>
      <AppHeader bgColor="black" getCityName={getCityName} />
      <div className="d-flex">
        <div className={styles["sliding-tabs"]}>
          <ServiceTabs passIndexHandler={passIndexHandler} />
          <div className={styles["home-content"]}>
            <RatingDiv />
            <Done passedIndex={passedIndex} />
            <HondaAmaze passedIndex={passedIndex} />
            <AskedQuestions passedIndex={passedIndex} />
            <ServiceKey />
            <WhyHonda passedIndex={passedIndex} />
            <Reviews passedIndex={passedIndex} />
            <PopularServices />
            <PopularRegion />
          </div>
        </div>
        <CheckoutCard />
      </div>
    </div>
  );
}
