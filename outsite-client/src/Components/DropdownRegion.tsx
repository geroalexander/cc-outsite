import React, { useEffect, useState, useContext } from 'react';
import { Property } from '../Interfaces/Property';
import GlobalContext from '../globalContext';

const DropdownRegion = ({ region }) => {
  const [regionalProperties, setRegionalProperties] = useState<Property[]>([]);
  const [showList, setShowList] = useState(false);

  const { properties } = useContext(GlobalContext);

  useEffect(() => {
    const filtered = properties.filter((p: Property) => p.region === region);
    setRegionalProperties(filtered);
  }, [properties]);

  return (
    <div>
      <button onClick={() => setShowList(!showList)} className="border-2">
        {region}
      </button>
      <div className={!showList ? 'hidden' : ''}>
        {regionalProperties.map((property) => (
          <li>
            <span>{property.wfContent.name}</span>
            <span>{property.wfContent.houseName}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropdownRegion;
