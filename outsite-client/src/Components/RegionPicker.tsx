import React, { useEffect, useState } from 'react';

const RegionPicker = ({ selectedRegion, setSelectedRegion }) => {
  const regions = [
    'United States',
    'Latin America',
    'Europe',
    'Asia Pacific',
    'Caribbean',
  ];

  const handleClick = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div>
      {regions.map((region) => (
        <button
          value={region}
          className={selectedRegion === region ? 'text-xl p-5' : 'p-5 text-sm'}
          onClick={handleClick}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionPicker;
