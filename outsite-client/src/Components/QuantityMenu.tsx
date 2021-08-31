import React, { useState } from 'react';

const QuantityMenu = () => {
  const [showList, setShowList] = useState(false);
  const [guestQuantity, setGuestQuantity] = useState('One Guest');

  const handleClickOne = () => {
    setShowList(!showList);
    setGuestQuantity('One Guest');
  };
  const handleClickTwo = () => {
    setShowList(!showList);
    setGuestQuantity('Two Guest');
  };

  return (
    <div className="flex flex-col border-2 flex-1">
      <span className="text-sm leading-5 font-medium text-gray-700">
        Guests
      </span>
      <div className="flex flex-col sm:flex-row flex-1">
        <button
          onClick={() => setShowList(!showList)}
          className="border-2 flex-1"
        >
          {guestQuantity}
        </button>
        <ul className={!showList ? 'hidden' : ' '}>
          <li className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 flex-1">
            <button onClick={handleClickOne} value="One Guest">
              One Guest
            </button>
          </li>
          <li className="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 flex-1">
            <button onClick={handleClickTwo} value="Two Guest">
              Two Guest
            </button>
          </li>
        </ul>
        <button className="border-2 flex-1 bg-outsite-blue text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default QuantityMenu;
