import React from "react";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import { PaginationSlider, PaginationSliderSmall, SpareParts } from "./minorComponents";
import { OemBrand } from "./OemBrand/OemBrand";
import NavBar from "./SpareHeader";
import SpareForm from "./sparesForm/SpareForm";
import "./style/style.css";
import TopDeals from "./TopDeals/TopDeals";

const SparePageMain = () => {

  return (
    <div className="mainApp">
      <NavBar />
      {/* <PaginationSlider/>
      <PaginationSliderSmall />
      <SpareParts /> */}
      <PaginationSlider />
      <SpareForm/>
      <PaginationSliderSmall />
      <SpareParts/>
      <FeaturedCategories />
      <OemBrand />
      <TopDeals/>
      
    </div>
  );
};

export default SparePageMain;
