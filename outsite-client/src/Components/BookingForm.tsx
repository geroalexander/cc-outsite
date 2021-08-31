import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import QuantityMenu from './QuantityMenu';
import CalenderMenu from './CalenderMenu';

const BookingForm = () => {
  return (
    <div className="flex flex-col -mt-56 sm:-mt-32 lg:-mt-24 mb-10 sm:mx-20 md:mx-10 l:mx-16 xl:mx-20">
      <div className="text-3xl leading-9 text-white font-semibold mb-4">
        Work anywhere. Live differently
      </div>
      <div className="bg-white filter drop-shadow-md rounded-md px-4 py-3 sm:px-8 flex flex-wrap justify-between flex-col md:flex-row">
        <div className="flex flex-col sm:flex-row flex-1">
          <DropdownMenu />
          <CalenderMenu />
        </div>
        <QuantityMenu />
      </div>
    </div>
  );
};

export default BookingForm;
