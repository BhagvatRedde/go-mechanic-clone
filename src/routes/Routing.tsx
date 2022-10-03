import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import { Home } from '../pages/home/Home';
import { Services } from '../pages/services/Services';
import SparePage from '../pages/spare-page/SparePage';
import Milesmembership from '../pages/miles-Membership/Miles-Membership';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spares" element={<SparePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/miles-membership" element={ <Milesmembership/> } />
      </Routes>
    </div>
  );
}

export default Routing