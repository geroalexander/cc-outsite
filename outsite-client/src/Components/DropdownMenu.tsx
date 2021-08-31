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
    <div className="flex flex-col border-2 flex-1">
      <span className="text-sm leading-5 font-medium text-gray-700">Space</span>
      <button onClick={() => setShowList(!showList)} className="border-2">
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
