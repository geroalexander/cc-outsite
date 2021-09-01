import React, { useState, useContext } from 'react';
import DropdownRegion from './DropdownRegion';
import GlobalContext from '../globalContext';

const DropdownMenu = () => {
  const { regions } = useContext(GlobalContext);

  const [selectedHouse, setSelectedHouse] = useState('Lisbon - Cais do Sodre');
  const [showList, setShowList] = useState(false);

  const handleClickHouse = (property) => {
    setSelectedHouse(property);
    setShowList(!showList);
  };

  return (
    <div className="flex flex-col flex-1 p-1 my-1 relative">
      <span className="text-sm leading-5 font-medium text-gray-700">Space</span>
      <button
        onClick={() => setShowList(!showList)}
        className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-outsite-green focus:border-outsite-green sm:text-sm"
      >
        {selectedHouse}
      </button>
      <div className="w-full">
        <ul
          className={
            !showList
              ? 'hidden'
              : // : 'absolute top-20 left-4 bg-white overflow max-h-50 z-10 p-2 w-1/2'
                'absolute z-10  mt-2 bg-white shadow-lg max-h-60 rounded-md py-1 text-base border overflow-auto focus:outline-none sm:text-sm  w-full'
          }
        >
          {regions.map((region) => (
            <DropdownRegion
              handleClickHouse={handleClickHouse}
              region={region}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
