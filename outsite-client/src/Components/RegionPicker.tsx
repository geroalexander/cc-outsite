import React, { useContext } from 'react';
import GlobalContext from '../globalContext';

const RegionPicker = ({ selectedRegion, setSelectedRegion }) => {
  const { regions } = useContext(GlobalContext);

  const handleClick = (e) => {
    setSelectedRegion(e.target.value);
  };

  return (
    <div className="flex flex-wrap justify-items-center py-8">
      {regions.map((region) => (
        <button
          value={region}
          className={
            selectedRegion === region
              ? 'bg-outsite-blue text-white transition-colors duration-200 rounded-xl px-4 py-3'
              : 'bg-white text-gray-700 hover:text-gray-900 transition-colors duration-200 rounded-xl px-4 py-3'
          }
          onClick={handleClick}
        >
          {region}
        </button>
      ))}
    </div>
  );
};

export default RegionPicker;
