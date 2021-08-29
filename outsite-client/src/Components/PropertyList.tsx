import React, { useEffect, useState } from 'react';
import { fetchProperties } from '../ApiService/fetchProperties';
import { Property } from '../Interfaces/Property';
import { PropInfo } from '../Interfaces/PropInfo';
import PropertyItem from './PropertyItem';

const PropertyList = ({ selectedRegion }) => {
  const [properties, setProperties] = useState([]);

  async function getProperties() {
    const { getAllProperties } = await fetchProperties();
    setProperties(getAllProperties);
  }

  useEffect(() => {
    getProperties();
  }, []);

  console.log(properties);

  return (
    <div>
      {properties.map((property: Property) =>
        property.region === selectedRegion ? (
          <PropertyItem property={property} />
        ) : null
      )}
    </div>
  );
};

export default PropertyList;
