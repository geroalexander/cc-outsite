import React, { useEffect, useState } from 'react';
import Header from './Header';
import Banner from './Banner';
import PropertyList from './PropertyList';
import RegionPicker from './RegionPicker';

const Dashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('United States');

  return (
    <>
      <Header />
      <Banner />
      <RegionPicker
        selectedRegion={selectedRegion}
        setSelectedRegion={setSelectedRegion}
      />
      <PropertyList selectedRegion={selectedRegion} />
    </>
  );
};

export default Dashboard;
