import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";
import { ServiceTabs } from "../../components/servicePriceComp/ServiceTabs";
import { PackageCard } from "../../components/servicePageComps/PackageCard";

export function Services() {
  return (
    <>
      <AppHeader bgColor="black" />

      <div className={styles["sliding-tabs"]}>
        <ServiceTabs />
        <div className={styles["home-content"]}>
          <PackageCard />
        </div>
      </div>
    </>
  );
}
