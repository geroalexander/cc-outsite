import React, { useEffect, useState, useContext } from 'react';
import { Property } from '../Interfaces/Property';
import GlobalContext from '../globalContext';

const DropdownRegion = ({ region, handleClickHouse }) => {
  const [regionalProperties, setRegionalProperties] = useState<Property[]>([]);
  const [showList, setShowList] = useState(false);

  const { properties } = useContext(GlobalContext);

  useEffect(() => {
    const filtered = properties.filter((p: Property) => p.region === region);
    setRegionalProperties(filtered);
  }, [properties]);

  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        // className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm"
      >
        {region}
      </button>
      <div className={!showList ? 'hidden' : ''}>
        {regionalProperties.map((property) => (
          <li>
            <button
              onClick={() => handleClickHouse(property.wfContent.name)}
              value={property.wfContent.name}
            >
              <span>{property.wfContent.name}</span>
              <span>{property.wfContent.houseName}</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropdownRegion;
