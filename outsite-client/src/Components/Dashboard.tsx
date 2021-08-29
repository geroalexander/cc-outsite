import React, { useEffect, useState } from 'react';
import PropertyList from './PropertyList';
import RegionPicker from './RegionPicker';

const Dashboard = () => {
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

export default Dashboard;
