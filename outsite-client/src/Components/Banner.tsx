import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import Image from '../assets/banner-outsite.jpeg';

const Banner = () => {
  return (
    <div>
      <img src={Image} alt="people chilling" />
      <BookingForm />
    </div>
  );
};

export default Banner;
