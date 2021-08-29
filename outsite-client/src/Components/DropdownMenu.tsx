import React, { useEffect, useState, useContext } from 'react';
import DropdownRegion from './DropdownRegion';
import GlobalContext from '../globalContext';

const DropdownMenu = () => {
  const { regions } = useContext(GlobalContext);
  const [showList, setShowList] = useState(false);

  return (
    <div>
      <button onClick={() => setShowList(!showList)} className="border-2">
        Click Here!
      </button>
      <ul className={!showList ? 'hidden' : ''}>
        {regions.map((region) => (
          <DropdownRegion region={region} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
