import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import image from '../assets/image-outsite.jpeg';

const Banner = () => {
  return (
    <div className="">
      <div
        className="max-w-full h-96 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* <img className="flex-shrink-0" src={image} alt="people chilling" /> */}
      <BookingForm />
    </div>
  );
};

export default Banner;
