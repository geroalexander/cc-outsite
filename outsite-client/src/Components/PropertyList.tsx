import React, { useContext } from 'react';
import { Property } from '../Interfaces/Property';
import PropertyItem from './PropertyItem';
import GlobalContext from '../globalContext';

const PropertyList = ({ selectedRegion }) => {
  const { properties } = useContext(GlobalContext);

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
