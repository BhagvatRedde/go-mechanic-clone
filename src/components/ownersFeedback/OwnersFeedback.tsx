import React from "react";
import { feedback } from "./feedback";
import Indicator from "../indicatorComponent/Indicator";
export default function OwnersFeedback() {

  return (
    <>
      <Indicator data={feedback} />
    </>
  );
}
