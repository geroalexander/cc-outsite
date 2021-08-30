import React, { useState } from 'react';

const QuantityMenu = () => {
  const [showList, setShowList] = useState(false);
  const [guestQuantity, setGuestQuantity] = useState('One Guest');

  const handleClickOne = (e) => {
    setShowList(!showList);
    setGuestQuantity('One Guest');
  };
  const handleClickTwo = (e) => {
    setShowList(!showList);
    setGuestQuantity('Two Guest');
  };

  return (
    <>
      <button onClick={() => setShowList(!showList)} className="border-2">
        {guestQuantity}
      </button>
      <ul className={!showList ? 'hidden' : ''}>
        <li>
          <button onClick={handleClickOne} value="One Guest">
            One Guest
          </button>
        </li>
        <li>
          <button onClick={handleClickTwo} value="Two Guest">
            Two Guest
          </button>
        </li>
      </ul>
    </>
  );
};

export default QuantityMenu;
