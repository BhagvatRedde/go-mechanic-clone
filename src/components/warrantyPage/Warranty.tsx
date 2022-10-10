import React from 'react'
import WarrantyBody from './warrantyBody/WarrantyBody';
import WarrantyFooter from './warrantyFooter/WarrantyFooter';
import WarrantyHeader from './warrantyHeader/WarrantyHeader';

const Warranty = () => {
  return (
    <div>
      <WarrantyHeader />
      <WarrantyBody/>
      <WarrantyFooter/>
    </div>
  )
}

export default Warranty;
