import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../globalContext';

const RegionPicker = ({ selectedRegion, setSelectedRegion }) => {
  const { regions } = useContext(GlobalContext);

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
