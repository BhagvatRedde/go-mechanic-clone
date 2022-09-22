import React from "react";
import { feedback } from "./feedback";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import rightArrow from "socialMedia/rightArrow.png";
// import leftArrow from "socialMedia/leftArrow.png";
export default function Slider({ direction, moveCard }: any) {
  console.log(direction, moveCard);

  const moveSlide = () => {};

  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next " : "btn-slide prev"}
    >
      <img
        style={{ height: "10%", width: "10%" }}
        src={
          direction === "next"
            ? "socialMedia/leftArrow.png"
            : "socialMedia/rightArrow.png"
        }
      />
    </button>
  );
}
