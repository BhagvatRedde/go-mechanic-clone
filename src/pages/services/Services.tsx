import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";



import RatingDiv from "../../components/ratingModule/ratingDiv";
import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";


export function Services() {
  return (
    <>
      <AppHeader bgColor="black" />

      <div className={styles["sliding-tabs"]}>
        <ServiceTabs />
        <div className={styles["home-content"]}>

          <RatingDiv />
        </div>
      </div>
    </>
  );
}
