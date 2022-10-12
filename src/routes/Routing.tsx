import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Services } from "../pages/services/Services";
import SparePage from "../pages/spare-page/SparePage";
import Milesmembership from "../pages/miles-Membership/Miles-Membership";
import Warranty from "../components/warrantyPage/Warranty";
import { SecureCheckout } from "../components/servicePriceComp/checkoutCard/secureCheckout/SecureCheckout";

const Routing = ({ selectedCarHandler, ...rest }: any) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Home selectedCarHandler={selectedCarHandler} />}
        />
        <Route path="/spares" element={<SparePage />} />
           <Route path="/extended-warranty" element={ <Warranty/> } />
        <Route
          path="/services"
          element={<Services selectedCar={rest.selectedCar} />}
        />
        <Route path="/miles-membership" element={<Milesmembership />} />
        <Route path="/cartPage" element={<SecureCheckout/>} />
      </Routes>
    </div>
  );
};

export default Routing;
