import styles from "./Home.module.css";

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
        {/* Slider Components */}
        <MechanicWork />
        <MechanicBenefits />
        <OwnersFeedback /><GoQuetion />
        {/* <Dash_saperator /> */}

      </div>
    </div>
  );
};
