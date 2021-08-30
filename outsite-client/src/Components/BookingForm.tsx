import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import QuantityMenu from './QuantityMenu';
import CalenderMenu from './CalenderMenu';

const BookingForm = () => {
  return (
    <>
      <DropdownMenu />
      <QuantityMenu />
      <CalenderMenu />
    </>
  );
};

export default BookingForm;
