import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";



import RatingDiv from "../../components/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";
import { HondaAmaze } from "../../components/servicePriceComp/customerQuotes/HondaAmaze/HondaAmaze";
import { AskedQuestions } from "../../components/servicePriceComp/AskedQuetions/AskedQuetions";


export function Services() {
  return (
    <>
      <AppHeader bgColor="black" />

      <div className={styles["sliding-tabs"]}>
        <ServiceTabs />
        <div className={styles["home-content"]}>

          <RatingDiv />
          <HondaAmaze />
          <AskedQuestions />
        </div>
      </div>
    </>
  );
}
