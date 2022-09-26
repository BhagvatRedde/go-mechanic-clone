import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";

import ServiceTabs from "../../components/servicePriceComp/serviceTabs/ServiceTabs";
import { Periodic } from "../../components/servicePriceComp/serviceTypes/periodic/Periodic";
export function Services() {
  return (
    <>
      <AppHeader bgColor="black" />

      <div className={styles["sliding-tabs"]}>
        {/* <ServiceTabs /> */}
        <ServiceTabs />
        <div className={styles["home-content"]}></div>
      </div>
    </>
  );
}
