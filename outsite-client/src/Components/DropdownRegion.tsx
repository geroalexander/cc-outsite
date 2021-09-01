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
    <div className="relative">
      <button
        onClick={() => setShowList(!showList)}
        className="flex justify-between w-full px-4 py-2 text-lg text-gray-900 text-left "
        // className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm"
      >
        {region}
      </button>
      <div className={!showList ? 'hidden' : ''}>
        {regionalProperties.map((property) => (
          <li className="cursor-default select-none relative py-1 pl-8 pr-4 hover:bg-gray-200">
            <div
              onClick={() => handleClickHouse(property)}
              className="flex flex-col"
            >
              <span className="text-gray-900 text-base truncate transition-colors duration-200">
                {property.wfContent.name}
              </span>
              <span className="text-gray-600 text-xs tracking-widest uppercase truncate">
                {property.wfContent.houseName}
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default DropdownRegion;
