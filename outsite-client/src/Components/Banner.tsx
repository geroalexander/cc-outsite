import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import image from '../assets/image-outsite.jpeg';

const Banner = () => {
  return (
    <div className="">
      <div
        className="max-w-full h-96 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col">
          <div className="text-3xl leading-9 text-white font-semibold mb-4">
            Work anywhere. Live differently
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default Banner;
