import React, { useState } from 'react';

import PropertyList from './PropertyList';
import RegionPicker from './RegionPicker';

const LocationContainer = () => {
  const [selectedRegion, setSelectedRegion] = useState('United States');

  return (
    <div className="flex flex-col items-center sm:mx-20 md:mx-10 l:mx-16 xl:mx-20">
      <RegionPicker
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <PropertyList selectedRegion={selectedRegion} />
    </div>
  );
};

export default LocationContainer;
