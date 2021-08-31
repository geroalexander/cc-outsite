import React, { useState, useContext } from 'react';
import DropdownRegion from './DropdownRegion';
import GlobalContext from '../globalContext';

const DropdownMenu = () => {
  const { regions } = useContext(GlobalContext);
  const [showList, setShowList] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState('Lisbon - Intendente');

  const handleClickHouse = (property) => {
    setSelectedHouse(property);
    setShowList(!showList);
  };

  return (
    <div className="flex flex-col flex-1 p-1 my-1 ">
      <span className="text-sm leading-5 font-medium text-gray-700">Space</span>
      <button
        onClick={() => setShowList(!showList)}
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm"
      >
        {selectedHouse}
      </button>
      <ul className={!showList ? 'hidden' : 'absolute top-20 left-8 bg-white'}>
        {regions.map((region) => (
          <DropdownRegion handleClickHouse={handleClickHouse} region={region} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
