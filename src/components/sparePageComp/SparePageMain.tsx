import React from "react";
import NavBar from "./SpareHeader";
import "./style/style.css";
import {
  PaginationSlider,
  PaginationSliderSmall,
  SpareParts,
} from "./minorComponents";
import {
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  s_poster1,
  s_poster2,
  s_poster3,
  s_poster4,
} from "./images";
const SparePageMain = () => {
  let allPosters = [
    poster1,
    poster2,
    poster3,
    poster4,
    poster5,
    poster6,
    poster7,
  ];

  const allSmallPosters = [
    s_poster1,
    s_poster2,
    s_poster3,
    s_poster4,
    s_poster4,
  ];
  return (
    <div className="mainApp">
      <NavBar />
      <PaginationSlider allPosters={allPosters} />
      <PaginationSliderSmall allSmallPosters={allSmallPosters} />
      <SpareParts />
    </div>
  );
};

export default SparePageMain;
