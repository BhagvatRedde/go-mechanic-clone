import React from "react";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import {
  PaginationSlider,
  PaginationSliderSmall,
  SpareParts,
} from "./minorComponents";
import { OemBrand } from "./OemBrand/OemBrand";
import { OesBrands } from "./oesBrands/OesBrands";
import { SpareOffer } from "./offer/SpareOffer";
import NavBar from "./SpareHeader";
import SpareForm from "./sparesForm/SpareForm";
import "./style/style.css";
import TopDeals from "./TopDeals/TopDeals";

const SparePageMain = () => {
  return (
    <div className="mainApp flex">
      <NavBar />
      <div className="my-container">
        {/* <PaginationSlider/>
      <PaginationSliderSmall />
      <SpareParts /> */}
        <PaginationSlider />
        <SpareForm />
        <PaginationSliderSmall />
        <SpareParts />
        <FeaturedCategories />
        <OemBrand />
        <TopDeals />
        <OesBrands />
        <SpareOffer />
      </div>
    </div>
  );
};

export default SparePageMain;
