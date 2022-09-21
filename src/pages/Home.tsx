import styles from "./Home.module.css";

import { AppHeader } from "../components/header/AppHeader";
import { ServiceModal } from "../components/serviceModal/ServiceModal";
import CustomServices from "../components/customServices/CustomServices";
import CarServices from "../components/carServices/CarServices";
import { MechanicBenefits } from "../components/goMechanicBenefit/mechanicBenefits";
import MechanicWork from "../components/goMechanicWork/mechanicWork";
import { StickyHeader } from "../components/stickyHeader/StickyHeader";
import FestiveCarEssential from "../components/festiveCarEssential/FestiveCarEssential";
import NewCards from "../components/cards/NewCards";

export const Home = () => {
  return (
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
        <FestiveCarEssential/>
        {/* Slider Components */}
        <MechanicWork />
        <MechanicBenefits />
        {/* <NewCards/> */}
      </div>
    </div>
  );
};
