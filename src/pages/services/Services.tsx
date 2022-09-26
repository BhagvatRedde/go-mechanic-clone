import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";
import { useState } from "react";
import { PackageCard } from "../../components/servicePageComps/PackageCard";
import RatingDiv from "../../components/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";

export function Services() {
  const [cityName, setCityName] = useState("Pune");
  const getCityName = (city: string) => {
    setCityName(city);
  };
  return (
    <div>
      <AppHeader bgColor="black" getCityName={getCityName} />

      <div className={styles["sliding-tabs"]}>
        <ServiceTabs />
        <div className={styles["home-content"]}>
          <RatingDiv />
        </div>
      </div>
    </div>
  );
}
