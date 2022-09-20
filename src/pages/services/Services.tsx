import styles from "./Servics.module.css";
import { AppHeader } from "../../components/header/AppHeader";
import { ServiceTabs } from "../../components/servicePriceComp/ServiceTabs";

export function Services() {
  return (
    <>
      <AppHeader bgColor="black" />

      <div className={styles["home-content"]}>
        <ServiceTabs />
      </div>
    </>
  );
}
