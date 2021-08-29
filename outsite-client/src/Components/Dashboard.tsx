import React, { useEffect, useState } from 'react';
import { GlobalProvider } from '../globalContext';
import Header from './Header';
import Banner from './Banner';
import LocationContainer from './LocationContainer';
import { fetchProperties } from '../ApiService/fetchProperties';
import { InitialState } from '../Interfaces/InitalState';

const Dashboard = () => {
  const [properties, setProperties] = useState([]);

  async function getProperties() {
    const { getAllProperties } = await fetchProperties();
    setProperties(getAllProperties);
  }

  useEffect(() => {
    getProperties();
  }, []);

  const initalState: InitialState = {
    regions: [
      'United States',
      'Latin America',
      'Europe',
      'Asia Pacific',
      'Caribbean',
    ],
    properties,
  };

  return (
    <>
      <GlobalProvider value={initalState}>
        <Header />
        <Banner />
        <LocationContainer />
      </GlobalProvider>
    </>
  );
};

export default Dashboard;
