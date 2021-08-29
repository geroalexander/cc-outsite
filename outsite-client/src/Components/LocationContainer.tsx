import React, { useEffect, useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import PropertyList from './PropertyList';
import RegionPicker from './RegionPicker';

const LocationContainer = () => {
  const [selectedRegion, setSelectedRegion] = useState('United States');

  return (
    <>
      <RegionPicker
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <PropertyList selectedRegion={selectedRegion} />
    </>
  );
};

export default LocationContainer;
