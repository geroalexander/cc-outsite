import React, { useContext } from 'react';
import { Property } from '../Interfaces/Property';
import PropertyItem from './PropertyItem';
import GlobalContext from '../globalContext';

const PropertyList = ({ selectedRegion }) => {
  const { properties } = useContext(GlobalContext);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4">
      {properties.map((property: Property) =>
        property.region === selectedRegion ? (
          <PropertyItem property={property} />
        ) : null
      )}
    </div>
  );
};

export default PropertyList;
