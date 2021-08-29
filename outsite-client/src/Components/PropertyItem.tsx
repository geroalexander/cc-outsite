import React, { useEffect, useState } from 'react';
import { Property } from '../Interfaces/Property';
import { PropInfo } from '../Interfaces/PropInfo';

const PropertyItem = ({ property }) => {
  return (
    <div>
      <img src={property.wfContent.heroImage} alt={property.wfContent.name} />
      <div>
        <p>{property.wfContent.name}</p>
        <p>{property.wfContent.houseName}</p>
      </div>
    </div>
  );
};

export default PropertyItem;
