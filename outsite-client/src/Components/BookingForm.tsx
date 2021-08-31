import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import QuantityMenu from './QuantityMenu';
import CalenderMenu from './CalenderMenu';

const BookingForm = () => {
  return (
    <div
      className="flex flex-col -mt-56 sm:-mt-32 lg:-mt-24 mb-10 sm:mx-12 md:mx-16 lg:mx-10 xl:mx-18"
      // className="-mt-56 sm:-mt-32 lg:-mt-24 mb-10 "
    >
      <div className="text-3xl leading-9 text-white font-semibold mb-4">
        Work anywhere. Live differently
      </div>
      <div className="bg-white filter drop-shadow-md rounded-md px-4 py-3 sm:px-4 flex flex-wrap justify-between flex-col lg:flex-row">
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
