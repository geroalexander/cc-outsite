import React, { useEffect, useState } from 'react';
import { Property } from '../Interfaces/Property';
import { PropInfo } from '../Interfaces/PropInfo';

const PropertyItem = ({ property }) => {
  return (
    <div>
      <img src={property.wfContent.heroImage} alt={property.wfContent.name} />
      <div>
        <p>name: {property.wfContent.name}</p>
        <p>houseName: {property.wfContent.houseName}</p>
      </div>
    </div>
  );
};

export default PropertyItem;
