import styles from "./Home.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppHeader } from "../components/header/AppHeader";
import { ServiceModal } from "../components/serviceModal/ServiceModal";
import CustomServices from "../components/customServices/CustomServices";
import CarServices from "../components/carServices/CarServices";
import { MechanicBenefits } from "../components/goMechanicBenefit/mechanicBenefits";
import MechanicWork from "../components/goMechanicWork/mechanicWork";
import { StickyHeader } from "../components/stickyHeader/StickyHeader";
import { SaveData } from "../redux-store/action";

import axios from "axios";
import FestiveCarEssential from "../components/festiveCarEssential/FestiveCarEssential";
export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3000/Alldata")
      .then((res) => {
        console.log(res.data);
        dispatch(SaveData(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className={styles["img-container"]}>
        <div className="d-flex">
          <AppHeader bgColor="transparent" />
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
